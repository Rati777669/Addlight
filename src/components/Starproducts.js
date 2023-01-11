import React from 'react'
import '../styles/Starproducts.css'
const Starproducts = ({starprod}) => {
  return (
    <div class="products">
          <div className="bigsquare">
         <div class="smallrect"><img src={starprod[2]} alt="im"/></div>
         <div class="smallsquare"><img src={starprod[0]} alt="i"/></div>
         <div class="smallsquare"><img src={starprod[1]} alt="ima"/></div>
     </div>
         <div className="bigsquare"><img src={starprod[3]} alt="ima"/></div>
     </div>
    
  )
}

export default Starproducts