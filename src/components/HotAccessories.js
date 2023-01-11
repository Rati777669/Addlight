import React from 'react'
import HotAccessoriescard from './HotAccessoriescard.js'
import '../styles/HotAccessories.css'
const HotAccessories = ({decor,lighting,outdoor,brands,tabletop}) => {
  return (
    
    <div className='HotAccessories' >
     <div className='mainitems'>
       { decor &&  decor.map((item,index)=> (
         <HotAccessoriescard key={item.key} index={index} name={item.name} price={item.price} src={item.image}  />)
        )}
       { lighting &&  lighting.map((item,index)=> (
         <HotAccessoriescard key={item.key} index={index} name={item.name} price={item.price} src={item.image}  />)
        )}
         { outdoor &&  outdoor.map((item,index)=> (
         <HotAccessoriescard key={item.key} index={index} name={item.name} price={item.price} src={item.image}  />)
        )}
         { tabletop &&  tabletop.map((item,index)=> (
         <HotAccessoriescard key={item.key} index={index} name={item.name} price={item.price} src={item.image}  />)
        )} { brands &&  brands.map((item,index)=> (
          <HotAccessoriescard key={item.key} index={index} name={item.name} price={item.price} src={item.image}  />)
         )}
      </div>
    </div>


  )
}

export default HotAccessories