import React from 'react'

function RIghtSections({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
   <div className="container text-muted pt-5">
    <div className="row align-items-center">
      <div className="col-6">
        <div className="m-3 p-3">
        <h3>{productName}</h3>
        <p className='pt-4'>{productDescription}</p>
        <a href="#">{learnMore} <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      </div>

      <div className="col-6 ">
        <img src={imageUrl} alt="console_img" />

      </div>
    </div>
   </div>
  )
}

export default RIghtSections
