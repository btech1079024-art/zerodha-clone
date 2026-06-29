import React from "react";
import { Link } from "react-router-dom";

const links = {
  Company: [
    { label: "About", to: "/about" },
    { label: "Products", to: "/product" },
    { label: "Pricing", to: "/pricing" },
    { label: "Referral programme", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Zerodha.tech", to: "/" },
    { label: "Press & media", to: "/" },
    { label: "Zerodha cares (CSR)", to: "/" },
  ],
  Support: [
    { label: "Contact", to: "/support" },
    { label: "Support portal", to: "/" },
    { label: "Z-Connect blog", to: "/" },
    { label: "List of charges", to: "/" },
    { label: "Downloads & resources", to: "/" },
  ],
  Account: [
    { label: "Open an account", to: "/signup" },
    { label: "Fund transfer", to: "/" },
    { label: "60 day challenge", to: "/" },
  ],
};

const disclaimer = `Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.`;

function Footer() {
  return (
    <footer className="zp-footer">
      <div className="zp-footer__inner">
        {/* Top grid */}
        <div className="zp-footer__top">
          <div className="zp-footer__brand">
            <img src="media/images/logo.svg" alt="Zerodha" className="zp-footer__logo" />
            <p className="zp-footer__copy">© 2010 – 2024, Not Zerodha Broking Ltd.<br />All rights reserved.</p>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="zp-footer__col">
              <p className="zp-footer__col-title">{section}</p>
              <ul>
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="zp-footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="zp-footer__divider" />

        {/* Disclaimer */}
        <div className="zp-footer__disclaimer">
          <p>{disclaimer}</p>
          <p className="zp-footer__risk">
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p className="zp-footer__risk">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;