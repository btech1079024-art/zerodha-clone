require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Existing Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// New Authentication User Model
const UserModel = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "zerodha_super_secret_token_key";

const app = express();

// CORS configuration
app.use(cors({
  origin: ["https://zerodha-clone-m4dl.vercel.app","https://zerodha-clone-i618.vercel.app", "http://localhost:5173", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());

// ==========================================
//   SERVERLESS MONGOOSE CONNECTION BUFFER FIX
// ==========================================
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  if (!uri) {
    console.error("MONGO_URL environment variable is missing!");
    return;
  }

  try {
    // These options force Mongoose to fail quickly if connection is lost rather than hang/buffer
    const db = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, 
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected successfully via Serverless function!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

// Middleware to ensure DB is connected before handling any incoming requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Database connection failed. Please try again." });
  }
});

// ==========================================
//          ROOT / HEALTH ENDPOINT
// ==========================================
app.get("/", (req, res) => {
  res.status(200).send("Zerodha Clone Backend Server is Running Successfully!");
});

// ==========================================
//          AUTHENTICATION ENDPOINTS
// ==========================================

// 1. SIGNUP ROUTE
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Username or Email already registered." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      email,
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ success: true, message: "Account created successfully!" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Internal server registration error." });
  }
});

// 2. LOGIN ROUTE
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      token,
      username: user.username,
      message: "Authentication successful!",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal server login error." });
  }
});

// ==========================================
//          EXISTING DATA ENDPOINTS
// ==========================================

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;