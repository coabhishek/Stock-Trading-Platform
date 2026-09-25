import React from "react";

function Team() {
  return (
    <div className="container mt-5 p-5">
      <div className="row d-flex align-items-center">
        <div className="col-6 mt-5">
          <img
            src="imgs/nithinKamath.jpg"
            style={{ width: "70%", borderRadius: "50%" }}
            alt="nitin_kamaths"
          />
          <div className="NithinKamath-name">
            <span className="pure-name">Nithin Kamath</span> <br />
            <span>Founder, CEO</span>
          </div>
        </div>

        <div className="col-6 p-5">
          <h3 className="mb-3">People</h3>
          <p className="mt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-4 text-center mt-5 pt-5">
          <img
            src="/imgs/Nikhil.jpg"
            alt=""
            style={{ width: "70%", borderRadius: "50%" }}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <p>Co-founder & CFO </p>
          <p>Bio</p>
        </div>

        <div className="col-4 text-center mt-5 pt-5">
          <img
            src="/imgs/Austin.jpg"
            alt=""
            style={{ width: "70%", borderRadius: "50%" }}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <p>Co-founder & CFO </p>
          <p>Bio</p>
        </div>

        <div className="col-4 text-center mt-5 pt-5">
          <img
            src="/imgs/karthik.jpg"
            alt=""
            style={{ width: "70%", borderRadius: "50%" }}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <p>Co-founder & CFO </p>
          <p>Bio</p>
        </div>
      </div>


      <div className="row mb-5 pb-5">
        <div className="col-4 text-center mt-5 pt-5">
          <img
            src="/imgs/Seema.jpg"
            alt=""
            style={{ width: "70%", borderRadius: "50%" }}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <p>Co-founder & CFO </p>
          <p>Bio</p>
        </div>

        <div className="col-4 text-center mt-5 pt-5">
          <img
            src="/imgs/Venu.jpg"
            alt=""
            style={{ width: "70%", borderRadius: "50%" }}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <p>Co-founder & CFO </p>
          <p>Bio</p>
        </div>

        <div className="col-4 text-center mt-5 pt-5">
          <img
            src="/imgs/Kailash.jpg"
            alt=""
            style={{ width: "70%", borderRadius: "50%" }}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <p>Co-founder & CFO </p>
          <p>Bio</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
