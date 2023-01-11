import React from 'react'
import Videocard from './Videocard.js'
import  '../styles/videos.css'
const Videos = ({videos}) => {
  return (
    <div className='videos'>
         {
              videos.map((item,index)=>
             ( <Videocard key={item.image} index={index} name={item.title}
              image={item.image}/>))
         }
    </div>
  )
}

export default Videos