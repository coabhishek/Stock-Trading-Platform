import React from 'react'

function OpenAccount() {
  return (
    <div className='container p-5 text-muted'>
      <div className='row p-5'>
        <div className="col">
          <img src="/imgs/homeHero.png" alt="hero_image" className='img-fluid w-80'/>
          <div className='text-center'>
             <h3 className='text-center pt-5'>Open a Zerodha account
</h3>
          <p className='p-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          <button className='btn btn-primary p-2 mt-3'style={{width : "20%", fontWeight: '700'} }>Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenAccount
