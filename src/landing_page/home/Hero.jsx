import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 '>
      <div className='row text-center'>
        <img src="/media/homeHero.png" alt='Hero Image' className='mb-5' />
        <h1 className='mt-5'>Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button style={{ width: "20%", margin: "0 auto" }} className='p-2 btn btn-primary fs-5'>SignUp Now</button>
      </div>
    </div>
  )
}

export default Hero
