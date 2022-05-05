import React from 'react';
import '../css/uiuxSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import uione from "../img/uiux/uione.png";

function UiuxSlider() {


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


      function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(require.context('../img/uiux', false, /\.(png|jpe?g|svg)$/));

      
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
{
  images.map((u)=>

  <div key={u.default}>
      <div className='uiux_crd' >
      <img src={u.default}  alt={u.default} className='ui_crd_img'/>
      </div>
  </div>
  
  )

}


</Carousel>

</>

    )
}

    export default UiuxSlider;