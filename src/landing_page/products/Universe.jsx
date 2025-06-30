import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5 border-top ">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted ">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{ width: "30%" }} />
          <p className="text-small text-muted">Options Trading Platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" style={{ width: "30%" }} />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
