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
      


      
const develop =[
    {
        "id":"01",
        "topic":"WedCeylone Official website",
        "content":"This is the project for WedCeylon official website. This website is hosted under https://wedceylon-frontend.netlify.app/ web address.",
        "github":"https://github.com/99Slices/wedceylon_01",
        "view":"https://wedceylon-frontend.netlify.app/"
    },
    {
        "id":"02",
        "topic":"Creative Space official website",
        "content":"This is the project for Creative Space official website. This website is hosted under https://creativespace.netlify.app/ web address.",
        "github":"https://github.com/SQNC-Creators/creative_space_frontend",
        "view":"https://creativespace.netlify.app/"
    },
    {
        "id":"03",
        "topic":"Sequence Creators Official website",
        "content":"This is the project for Sequence Creators official website. This website is hosted under https://sequencecreators.com/ web address. ",
        "github":"https://github.com/Ruchirakavinda/SQNC-Creators-Website",
        "view":"#"
    },
    {
        "id":"04",
        "topic":"'SampleApp' Mobile Application - Flutter",
        "content":"This project is a starting point for a my Flutter application development. In here, I have developed the front-end of a application using only the flutter basic widgets and in-built functions.",
        "github":"https://github.com/Ruchirakavinda/flutter_myfirst",
        "view":"#"
    },
    {
        "id":"05",
        "topic":"'The-Cut' Mobile Application - Kotlin",
        "content":"Third year first semester mobile application development project. This is a application for make appointments for a saloon at NSBM green university",
        "github":"https://github.com/Ruchirakavinda/The-Cut-Mobile-Application---Kotlin",
        "view":"#"
    },
    {
        "id":"06",
        "topic":"Staff Management System - MERN Web Application",
        "content":"This is the Simple MERN Application with basic functinalities for a manage the staff members of a universty.",
        "github":"https://github.com/Ruchirakavinda/Staff-Managment-System---MERN-Application",
        "view":"https://staffms.netlify.app/"
    },
    {
        "id":"07",
        "topic":"Pixar-Lab Official WebSite",
        "content":"This is the project for Pixar Lab official website. This website is hosted under https://ruchirakavinda.github.io/Pixar-Lab-Web-Site/ web address.",
        "github":"https://github.com/Ruchirakavinda/Pixar-Lab-Web-Site",
        "view":"https://ruchirakavinda.github.io/Pixar-Lab-Web-Site/"
    },
    {
        "id":"08",
        "topic":"Phoenix Airlines - Web Application",
        "content":"Second year first semester Java servlets project. This is an online airlines ticket reservation system for the company Phoenix Airline",
        "github":"https://github.com/Thilina-Pathirage/PhoenixAirlinesDEA",
        "view":"#"
    },
    {
        "id":"09",
        "topic":"Sea Side South Park - Web Application",
        "content":"First year second semester web project. This is a hotel room reservation system for a hotel",
        "github":"https://github.com/Ishan-Chanuka/Web_final",
        "view":"#"
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

develop.map(
    (d) => 
  <div>
      <div className='dev_crd' key={d.id}>
          <h1 className='crdtopic'>{d.topic}</h1>
          <p className='aboutcont'>{d.content}</p>
          <div className='d-flex justify-content-center'>
             <p className='crd_link' onClick={() => {window.location.href=d.github}}>Github</p>
             <p className='crd_link' onClick={() => {window.location.href=d.view}}>View</p>
          </div>
      </div>
  </div>

)

}

</Carousel>

</>

    )
}

    export default DevelopmentSlider;