import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/slider.css'
const arrow=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
const Slider = ({Start}) => {
  return (
       <div >
       <Carousel fade nextLabel=' ' prevLabel=' ' >
            {Start.map((item)=>(
            <Carousel.Item>
                 <div className='container-flui'>
                 <img className="d-block w-100 h-100 slide" src={item} alt ='color'/>
                 </div>
            </Carousel.Item>
            ))}
       </Carousel>
       </div>
  );
};

export default Slider;
