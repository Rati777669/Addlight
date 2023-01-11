import React from 'react'
import '../styles/Offer.css'
const Offer = ({src,link,index,description,title}) => {
return (
   
    <div className='Objects'>
    <a href={link}> <img src={src} alt={`${index+1}offer`}/></a>
    
      <h4>{title}</h4>
      <p>
      {description}
    </p>
    </div>
  )
}
export default Offer

