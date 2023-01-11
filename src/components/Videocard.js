import React from 'react'
import  '../styles/Videocard.css'
const playbutton=<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z"/></g></svg>
const Videocard = ({image,name,index}) => {
  return (
      <div className="Videocard" style={{backgroundImage:`url(${image})`}}>
      
      <a href="#/">{playbutton}</a>          
      <p>{name}</p>  
     </div>

  )
}


export default Videocard