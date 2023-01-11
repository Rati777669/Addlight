import React from 'react'
import '../styles/footer.css'
const Footer = ({footer}) => {
  return (
    <div >
         <div className='footer'>
         <div>
              <p>ABOUT</p>
              {footer.about.map((item,index)=>(
                   <a href={item.url} key={item.url}>{item.name}</a>))
              }
         </div>
         <div>
                 <p>CONTACT US</p>
                  {footer.contact.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                 <p> SUPPORT</p>
                  {footer.support.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                 <p> COMMUNITY</p>
                  {footer.community.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
               
                  <p>Chat with our bot now</p>
                   <button className='chatbot'>Chat Now</button>
                  </div>
                  
                  </div>
       <div className="footerBorder">
       <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
        </div>
       
        </div>
        
  )
}

export default Footer