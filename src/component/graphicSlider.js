import React from 'react';
import '../css/graphicSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
    

      
      function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(require.context('../img/graphic', false, /\.(png|jpe?g|svg)$/));
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

  images.map((g)=>

  <div key={g.default}>
      <div className='uiux_crd' >
      <img src={g.default} alt={g.default} className='ui_crd_img'/>
      </div>
     
  </div>

  )

}
  {/* // <div>
  //     <div className='uiux_crd'>
  //     <img src={gr02} alt="" className='ui_crd_img'/>
  //     </div>
  // </div>

  // <div>
  //     <div className='uiux_crd'>
  //     <img src={gr03} alt="" className='ui_crd_img'/>
  //     </div>
  // </div>

  // <div>
  //     <div className='uiux_crd'>
  //     <img src={gr04} alt="" className='ui_crd_img'/>
  //     </div>
  // </div> */}

  


</Carousel>

</>

    )
}

    export default GraphicSlider;