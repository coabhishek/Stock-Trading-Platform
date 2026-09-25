import React from "react";

export default function Universe() {
  return (
    <div className="container text-muted">
      <h3 className="p-4 fs-5 text-center">
        Want to know more about our technology stack? Check out the{" "}
        <a className="fs-5 text-decoration-none" href="#">
          Zerodha.tech
        </a>{" "}
        blog.
        <div className="row text-center p-5 mt-5">
          <h3>The Zerodha Universe</h3>
          <p className="fs-6 p-4">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row fs-6 pt-5">
          <div className="col-4">
            <img
              style={{ width: "60%" }}
              src="/imgs/zerodhaFundhouse.png"
              alt="zerodhaFundhouse_img"
            />
            <p className="p-2">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-4">
            <img
              style={{ width: "60%" }}
              src="/imgs/sensibullLogo.svg"
              alt="zerodhaFundhouse_img"
            />
            <p className="p-2">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-4">
            <img
              style={{ width: "60%" }}
              src="/imgs/sensibullLogo.svg"
              alt="zerodhaFundhouse_img"
            />
            <p className="p-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>


          <div className="row fs-6 pt-5 mt-5 mb-5 pb-5">
          <div className="col-4">
            <img
              style={{ width: "60%" }}
              src="/imgs/zerodhaFundhouse.png"
              alt="zerodhaFundhouse_img"
            />
            <p className="p-2">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-4">
            <img
              style={{ width: "60%" }}
              src="/imgs/sensibullLogo.svg"
              alt="zerodhaFundhouse_img"
            />
            <p className="p-2">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-4">
            <img
              style={{ width: "60%" }}
              src="/imgs/sensibullLogo.svg"
              alt="zerodhaFundhouse_img"
            />
            <p className="p-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
      </h3>
    </div>
  );
}
