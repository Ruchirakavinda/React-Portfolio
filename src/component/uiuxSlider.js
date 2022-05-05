import React from 'react';
import '../css/uiuxSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import uione from "../img/uione.png";

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


      const uiux = [
        {
          "id":"01",
          "img":"uione.png",
        },
      ];
      
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
  uiux.map((u)=>

  <div>
      <div className='uiux_crd' key={u.id}>
      <img src={require("../../public/project_imgs/"+u.img)} alt className='ui_crd_img'/>
      </div>
  </div>
  
  )

}


</Carousel>

</>

    )
}

    export default UiuxSlider;