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

// Secure token fallback secret (Tip: Ideally move this to your .env file as JWT_SECRET=your_key)
const JWT_SECRET = process.env.JWT_SECRET || "zerodha_super_secret_token_key";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ==========================================
//          AUTHENTICATION ENDPOINTS
// ==========================================

// 1. SIGNUP ROUTE: Registers a new user with an encrypted password
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if the email or username is already taken
    const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Username or Email already registered." });
    }

    // Salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user inside your MongoDB collection
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

// 2. LOGIN ROUTE: Validates credentials and returns a secure JWT string
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    // Compare inputted password against encrypted hash strings
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    // Sign and create a JWT payload session string valid for 1 day
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
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// Start Server & Connect Database
app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});