import React from 'react'
import '../styles/HotAccessoriescard.css'
const HotAccessoriescard = ({index,price,name,src}) => {
  return (
    <div className='itemcard'>

      
         <img src={src} alt={`${index} imag`}/>
        
         <p>{name}</p>
         <span>{price}</span>
         
      
    </div>
  )
}

export default HotAccessoriescard