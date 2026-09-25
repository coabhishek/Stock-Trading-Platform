import React from "react";

export default function Education() {
  return (
    <div className="container text-muted">
      <div className="row align-items-center mt-5 pt-3">

     
      <div className="col-6 p-3">
        <img src="/imgs/education.svg" alt="educations_img" />
      </div>
      <div className="col-6">
        <div className="p-3">
          <h4>Free and open market education</h4>
          <p className="">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">Varsity <i class="fa-solid fa-arrow-right"></i></a>
        </div>

         <div className="mt-3 p-3">
          <p>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#">TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
       </div>
    </div>
  );
}
