import React from "react";
import Hero from "./Hero";
import ProductSection from "./ProductSection";
import Universe from "./Universe";
import "./Products.css";

function ProductsPage() {
  return (
    <div className="products-page">
      <Hero />

      <ProductSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productTag="Flagship Platform"
        productDescription="Our ultra-fast trading platform with streaming market data, advanced charting tools, and an elegant UI. Available on web, Android, and iOS — built for traders who demand speed and clarity."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
        reverse={false}
      />

      <ProductSection
        imageURL="media/images/console.png"
        productName="Console"
        productTag="Portfolio Dashboard"
        productDescription="The central hub for your ZeroPro account. Gain deep insights into your trades and investments with in-depth reports, visualisations, and tax tools — all in one place."
        learnMore="#"
        reverse={true}
      />

      <ProductSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productTag="Mutual Funds"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Zero expense ratio markups, ever. Available on Android and iOS."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
        reverse={false}
      />

      <ProductSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productTag="For Developers"
        productDescription="Build powerful trading platforms with our clean HTTP/JSON APIs. If you're a startup or developer, create your investment app and showcase it to our 1.5 crore+ clientbase."
        learnMore="#"
        reverse={true}
      />

      <ProductSection
        imageURL="media/images/varsity.png"
        productName="Varsity"
        productTag="Learn to Trade"
        productDescription="A free, structured collection of stock market lessons with in-depth coverage and illustrated examples. Broken into bite-size modules so you can learn at your own pace, anywhere."
        learnMore="#"
        googlePlay="#"
        appStore="#"
        reverse={false}
      />

      <div className="tech-note">
        <p>
          Curious about how we build this?{" "}
          <a href="#">Read the ZeroPro engineering blog →</a>
        </p>
      </div>

      <Universe />
    </div>
  );
}

export default ProductsPage;