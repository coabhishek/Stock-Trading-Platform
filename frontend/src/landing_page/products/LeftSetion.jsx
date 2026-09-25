import React from "react";

function LeftSetion({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 p-4">
          <img src={imageUrl} alt="kite_png)img" />
        </div>

        <div className="col-6 p-5">
          <h3 className="p-3">{productName}</h3>
          <p className="p-3">{productDescription}</p>

          <div className="kite-img-box">
            <span className="p-3">
              <a href="#">
                {tryDemo} <i class="fa-solid fa-arrow-right"></i>
              </a>
            </span>
            <span>
              <a href="#">
                {learnMore} <i class="fa-solid fa-arrow-right"></i>
              </a>
            </span>
            <div>
              <span>
                {" "}
                <img src={googlePlay} alt="google_img" className="p-3" />
              </span>
              <span>
                <img src={appStore} alt="apple_img" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSetion;
