import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/baner.css'
const Banner = ({banner}) => {
  return (
     
    <Carousel fade>
         
         {banner.map((item,index)=>(
               <Carousel.Item key={item.image}  id="banner" interval={4000} keyboard={true} prevLabel='' nextLabel=''>
                      <div className='baner'>
          <img className="d-block w-100" src={item.image} alt={`${index}banner`}/>
          </div>
          </Carousel.Item>
         ))}
        
         </Carousel>
        
  )
}

export default Banner