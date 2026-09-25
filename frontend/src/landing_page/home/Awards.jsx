import React from 'react'

function Awards() {
  return (
    <div className="container">
      <div className="row">  
      <div className="col-6 ">  
          <h3 className='p-2'>Trust with confidence</h3>
          <div className='mt-4'>
           <h4 className='p-2'>Customer-first always</h4>
           <p className='text-muted fs-5 p-2'> That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>

           <div className='mt-4'>
           <h4 className='p-2'>No spam or gimmicks</h4>
           <p className='text-muted fs-5 p-2'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a></p>
          </div>
           <div className='mt-4'>
           <h4 className='p-2'>The Zerodha universe</h4>
           <p className='text-muted fs-5 p-2'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
           <div className='mt-4'>
           <h4 className='p-2'>Do better with money</h4>
           <p className='text-muted fs-5 p-2'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
      </div>
      <div className="col-6" >
          <img src="/imgs/ecosystem.png" alt="ecosystem_img"  className='mt-5' style={{width : '95%'}}/>
          
          <div className='text-center'>
            <span className='p-3'>
              <a className='p-3 fs-5 text-decoration-none' href="#">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
              <a className='p-3 fs-5 text-decoration-none' href="#">Try Kite demo <i class="fa-solid fa-arrow-right"></i> </a>
            </span>
          </div>
      </div>


      <div className="row mt-5 kite_connect-img-box">
        <div className="col-4 p-4">
          <img src="imgs/kc-logo-landing.svg" alt="kite_connet" />
        </div>
        <div className="col-8">
          <p>
            Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.  
            <a href="">Explore <i class="fa-solid fa-arrow-right"></i></a>
          </p>
        </div>
      </div>

      </div>    
    </div>
  )
}

export default Awards
