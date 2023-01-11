import React from 'react'
import Offer from "./Offer.js"
import '../styles/Offers.css'

const Offers = ({offer}) => {
  return (

    <div className='offersection'>
         {
              offer.map((item,index) =>(
                   <Offer key={item.key} index={index} src={item.image} link={item.url} description={item.description} title={item.title}/>
              ))
}
         


    </div>
  )
}

export default Offers