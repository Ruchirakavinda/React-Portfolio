import React from 'react';
import '../css/developmentSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function DevelopmentSlider() {


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
      <div className='dev_crd'>
          <h1 className='crdtopic'>Website - Sequence Creators</h1>
          <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link'>Github</p>
             <p className='crd_link'>View</p>
          </div>
      </div>
  </div>

  <div>
      <div className='dev_crd'>
          <h1 className='crdtopic'>Note Keep Web Application</h1>
          <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link'>Github</p>
             <p className='crd_link'>View</p>
          </div>
      </div>
  </div>


  <div>
      <div className='dev_crd'>
          <h1 className='crdtopic'>Flutter Mobile Application</h1>
          <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link'>Github</p>
             <p className='crd_link'>View</p>
          </div>
      </div>
  </div>
  <div>
      <div className='dev_crd'>
          <h1 className='crdtopic'>Website - Sequence Creators</h1>
          <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link'>Github</p>
             <p className='crd_link'>View</p>
          </div>
      </div>
  </div>

  <div>
      <div className='dev_crd'>
          <h1 className='crdtopic'>Note Keep Web Application</h1>
          <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link'>Github</p>
             <p className='crd_link'>View</p>
          </div>
      </div>
  </div>


  <div>
      <div className='dev_crd'>
          <h1 className='crdtopic'>Flutter Mobile Application</h1>
          <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link'>Github</p>
             <p className='crd_link'>View</p>
          </div>
      </div>
  </div>


</Carousel>

</>

    )
}

    export default DevelopmentSlider;