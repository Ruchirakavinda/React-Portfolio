import React from 'react';
import '../css/feedbackSlider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function DemoCarousel() {
    return(
            <Carousel>
                <div className='d-flex justify-content-center'>
                    <div className='feedback_crd'>
                    <h1 className='crdtopic'>Mr. Example User</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                           <p className='user_mail'>exampleuser@gmail.com</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center'>
                    <div className='feedback_crd'>
                    <h1 className='crdtopic'>Mr. Example User</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                           <p className='user_mail'>exampleuser@gmail.com</p>
                    </div>

                </div>


                <div className='d-flex justify-content-center'>
                    <div className='feedback_crd'>
                    <h1 className='crdtopic'>Mr. Example User</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                           <p className='user_mail'>exampleuser@gmail.com</p>
                    </div>

                </div>
               
            </Carousel>
        );
    }

    export default DemoCarousel
