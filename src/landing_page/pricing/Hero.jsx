import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom">
      <div className="row p-5 mt-5  text-center">
        <h1>Pricing</h1>
        <h3 className="fs-5 text-muted ">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-3 ">
        <div className="col-4 p-5  text-center">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-3">Free Equity Delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-3 text-center">Free direct MF</h1>
          <p className="text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
