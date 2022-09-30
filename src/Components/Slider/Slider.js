import React, { useState } from 'react'
import './Slider.css'
 const sliderImages=[ {image:'https://img.freepik.com/free-photo/medicine-doctor-hold-medical-cross-icon-healthcare-network-innovation-healthcare-technology_34200-496.jpg?w=1380' },
{image:'https://blog.amopportunities.org/wp-content/uploads/2020/03/AMO-blog-nursing-scaled-1.jpg'},
{image:'https://cdn.vox-cdn.com/thumbor/2JI4L5bM6ZFd7iFZjYXePrf7-UY=/0x0:4867x3245/920x613/filters:focal(2045x1234:2823x2012):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69486687/1230464172.0.jpg' }]


function Slider() {
 const [index, setIndex] = useState(0)
  const nextSlide = () => {
    if(index===(sliderImages.length-1)){
    setIndex(0);
  }else setIndex(index+1)
}
  
  const prevSlide = () => {
    if(index===0){
      setIndex((sliderImages.length-1))
    }else setIndex(index-1)
  }

return (
      <div className='Slider'>
        <img className='picture' src={sliderImages[index].image} alt="No " />
        <button  className="buttonP" onClick={prevSlide} >{"<"}</button>
          <button className='buttonN' onClick={nextSlide}>{">"}</button>
           </div>
      
  );
}export default Slider