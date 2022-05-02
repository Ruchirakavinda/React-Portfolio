import React from 'react';
import '../css/graphicSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import uione from "../img/uione.png";
import gr01 from "../img/gr01.jpg";
import gr02 from "../img/gr02.png";
import gr03 from "../img/gr03.png";
import gr04 from "../img/gr04.png";

function GraphicSlider() {


const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
    return(
      <>


<Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={10000}
>

  <div>
      <div className='uiux_crd'>
      <img src={gr01} alt className='ui_crd_img'/>
      </div>
  </div>

  <div>
      <div className='uiux_crd'>
      <img src={gr02} alt className='ui_crd_img'/>
      </div>
  </div>

  <div>
      <div className='uiux_crd'>
      <img src={gr03} alt className='ui_crd_img'/>
      </div>
  </div>

  <div>
      <div className='uiux_crd'>
      <img src={gr04} alt className='ui_crd_img'/>
      </div>
  </div>

  


</Carousel>

</>

    )
}

    export default GraphicSlider;