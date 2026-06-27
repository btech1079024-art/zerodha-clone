import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      {/* Navbar removed from here because it's already in index.js */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      {/* Footer removed from here for the same reason */}
    </>
  );
}

export default HomePage;