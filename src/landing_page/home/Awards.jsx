import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-6 p-5 col-sm-6'><img src="media\largestBroker.svg" alt="" /></div>
        <div className='col-6 col-sm-6  p-5 '>
          <h1 className="mt-5">Largest stock broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:</p>
          <div className="row ">
            <div className='col-md-6'>
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media\pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  )
}

export default Awards
