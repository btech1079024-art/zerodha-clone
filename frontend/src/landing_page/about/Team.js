import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          {/* Updated style dimensions here to fix the squished aspect ratio */}
          <img
            src="media/images/aman.jpg" 
            alt="Aman"
            style={{ 
              borderRadius: "50%", 
              width: "250px",       // Equal width and height gives a perfect square base
              height: "250px", 
              objectFit: "cover"    // Keeps your face proportional instead of stretching
            }}
          />
          <h4 className="mt-5">Aman</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Aman bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;