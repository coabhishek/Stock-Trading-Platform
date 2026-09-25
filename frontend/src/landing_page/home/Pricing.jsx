import React from "react";

export default function Pricing() {
  return (
    <div className="container pt-5 mt-5 d-flex align-items-center">
      <div className="row text-muted ">
        <div className="col-6 p-3">
          <h3>Unbeatable pricing</h3>
          <p className="fs-5 pt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="fs-6 ">
            See Pricing<i class="fa-solid fs-6 fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-6">
          <div className="price-box-container">
            <div className="price-box">
              <img src="/imgs/pricingEquity.svg" alt="price_img" />
              <p>
                Free Account <br /> Opening
              </p>
            </div>

            <div className="price-box">
              <img src="/imgs/pricingEquity.svg" alt="price_img" />
              <p>
                Free Account <br /> Opening
              </p>
            </div>

            <div className="price-box">
              <img src="/imgs/pricingEquity.svg" alt="price_img" />
              <p>
                Free Account <br /> Opening
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
