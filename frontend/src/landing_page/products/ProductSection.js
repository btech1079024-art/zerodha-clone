import React from "react";
import "./Products.css";

function ProductSection({
  imageURL,
  productName,
  productTag,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  reverse = false,
}) {
  return (
    <section className={`product-section ${reverse ? "product-section--reverse" : ""}`}>
      <div className="product-section-inner">

        {/* Image side */}
        <div className="product-image-wrapper">
          <div className="product-image-frame">
            <img src={imageURL} alt={productName} className="product-image" />
          </div>
        </div>

        {/* Content side */}
        <div className="product-content">
          {productTag && (
            <span className="product-tag">{productTag}</span>
          )}
          <h2 className="product-name">{productName}</h2>
          <p className="product-description">{productDescription}</p>

          <div className="product-actions">
            {tryDemo && (
              <a href={tryDemo} className="btn-primary-outline">
                Try Demo
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="btn-text-link">
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>

          {(googlePlay || appStore) && (
            <div className="product-store-badges">
              {googlePlay && (
                <a href={googlePlay} className="store-badge-link">
                  <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" className="store-badge" />
                </a>
              )}
              {appStore && (
                <a href={appStore} className="store-badge-link">
                  <img src="media/images/appstoreBadge.svg" alt="Download on App Store" className="store-badge" />
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProductSection;