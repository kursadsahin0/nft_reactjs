import React from "react";

const Banner = () => {
  return (
    <>
      <section className="section hero" aria-label="home">
        <div className="container">
          <h1 className="headline-lg hero-title">
            {/* Discover rate collection or{" "} */}
            Explore Thousands of Digital {" "} <br/>
            <span className="span">Arts & NFTs</span>
          </h1>

          <p className="section-text body-lg">
          We are a massive marketplace dedicated to bringing together great artists, their fans, and unique token collectors, all within the captivating world of Web3!
          </p>

          <a href="#" className="btn">
            Explore now
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;