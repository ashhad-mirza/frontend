import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            pioneerd the concept of discount broking and price tranparency in
            India.Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"> </div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="col p-2 border">
              <h1 className="mb-3"> ₹0</h1>
              <p>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
