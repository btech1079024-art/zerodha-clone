import React from "react";

function Universe() {
  // Inline style object to ensure consistency across all logos
  const logoStyle = {
    width: "180px",      // Enforces a standard width across all logos
    height: "50px",      // Enforces a standard boundary height
    objectFit: "contain",// Prevents images from stretching or distortion
    marginBottom: "15px"
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zeropro Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row 1 */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" style={logoStyle} />
          <p className="text-small text-muted mx-auto" style={{ maxWidth: "250px" }}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={logoStyle} />
          <p className="text-small text-muted mx-auto" style={{ maxWidth: "250px" }}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" style={logoStyle} />
          <p className="text-small text-muted mx-auto" style={{ maxWidth: "250px" }}>Thematic investment platform</p>
        </div>

        {/* Row 2 */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" style={logoStyle} />
          <p className="text-small text-muted mx-auto" style={{ maxWidth: "250px" }}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" alt="Tijori" style={logoStyle} />
          <p className="text-small text-muted mx-auto" style={{ maxWidth: "250px" }}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="StreakLogo" style={logoStyle} />
          <p className="text-small text-muted mx-auto" style={{ maxWidth: "250px" }}>Thematic investment platform</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;