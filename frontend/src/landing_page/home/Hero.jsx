import React from "react";

function Hero() {
  return (
    <div className="container p-5 text-muted">
      <div className="row p-5">
        <div className="col">
          <img
            src="/imgs/homeHero.png"
            alt="hero_image"
            className="img-fluid w-80"
          />
          <div className="text-center">
            <h1 className="text-center pt-5">Invest in everything</h1>
            <p className="p-3">
              Online platform to invest in stocks, IPOs, derivatives, mutual
              funds, ETFs, bonds, and more.
            </p>
            <button
              className="btn btn-primary p-2 mt-3"
              style={{ width: "20%", fontWeight: "700" }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
