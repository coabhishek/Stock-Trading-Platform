import React from "react";

function Hero() {
  return (
    <div className="container text-muted">
      <div className="row text-center mt-5 p-5">
        <h1 className="fs-2">Charges</h1>
        <p className="p-3 fs-5">List of all charges and taxes</p>
      </div>

      <div className="row text-center ">
        <div className="pric-box col-4">
          <img src="/imgs/pricingMF.svg" alt="pricing-img" />
          <h3>Free equity delivery</h3>
          <p className="p-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="pric-box col-4">
          <img src="/imgs/other-trades.svg" alt="pricing-img" />
          <h3>Intraday and F&O trades</h3>
          <p className="p-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="pric-box col-4">
          <img src="/imgs/pricingMF.svg" alt="pricing-img" />
          <h3>Free direct MF</h3>
          <p className="p-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges..
          </p>
        </div>
      </div>

      <div className="row pt-4 mt-5">
        <div className="col-6">
          <ul>
            <li className="pricing-list type-account ">Type of account</li>
            <li className="pricing-list">Individual account</li>
            <li className="pricing-list">Minor account</li>
            <li className="pricing-list">NRI account</li>
            <li className="pricing-list">HUF account</li>
            <li className="pricing-list">Partnership, LLP, and Corporate accounts (offline only)</li>
          </ul>
        </div>

        <div className="col-6">

           <ul>
            <li className="pricing-list type-account">Value of holdings</li>
            <li className="pricing-list">Up to ₹4 lakh</li>
            <li className="pricing-list">₹4 lakh – ₹10 lakh</li>
            <li className="pricing-list">Above ₹10 lakh</li>
            <li className="pricing-list type-account">AMC</li>
            <li className="pricing-list">₹100 per year + 18% GST, charged quarterly</li>
            <li className="pricing-list">₹300 per year + 18% GST, charged quarterly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
