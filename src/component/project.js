import React, {useEffect} from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'; 
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';
import git from '../img/git.png';
import dri from '../img/dri.png';
import be from '../img/be.png';
import '../css/project.css';
import DevelopmentSlider from './developmentSlider';
import UiuxSlider from './uiuxSlider';
import GraphicSlider from './graphicSlider';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

function Project() {

    useEffect(()=>{
        Aos.init({
          duration:1000
        })
    
      }, []);


    return(
        <>
        <ScrollToTop>
        <MDBContainer fluid className='project_main'>
              <MDBContainer data-aos="fade-down" data-aos-once="true" >
                <MDBRow>
                    <MDBCol size='12' className='d-flex justify-content-center'>
                        <h1 className='project_main_topic'>My <span style={{color:"rgba(0, 153, 255, 0.767)"}}> Projects</span></h1>
                    </MDBCol>
                    <MDBCol size='12' className='d-flex justify-content-center'>
                    <p className='project_cont' style={{width:'80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
                    </MDBCol>
                </MDBRow>
               </MDBContainer>
               
               <div className='d-flex justify-content-center' data-aos="fade-down" data-aos-once="true">
                    <div className='d-flex justify-content-center img_row'>
                        <img src={git} alt='gihub' className='project_git_img img-fluid mx-auto' onClick={() => {window.location.href="https://github.com/Ruchirakavinda"}} />
                        <img src={dri} alt='dribble'className='project_dri_img img-fluid mx-auto' onClick={() => {window.location.href="https://dribbble.com/ruchirakvnd"}}  />
                        <img src={be} alt='behance' className='project_be_img img-fluid mx-auto' onClick={() => {window.location.href="https://www.behance.net/ruchirakavinda"}}/>
                    </div>
               </div>
            </MDBContainer>

            <MDBContainer fluid className='projectrow2'>
            <h1 className='About_main_topic' data-aos="fade-up" data-aos-once="true">PROJECTS</h1>

            <div style={{marginTop:'50px'}}>
            <h2 className='sub_topic' style={{textAlign:'center'}} data-aos="fade-up" data-aos-once="true">Development Projects</h2>
            <div className='d-flex justify-content-center'>
            <p className='project_cont' style={{width:'70%'}} data-aos="fade-up" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
            </div>

            <div data-aos="fade-up" data-aos-once="true">
            <DevelopmentSlider/>
            </div>
            </div>


            <div style={{marginTop:'120px'}}>
            <h2 className='sub_topic' style={{textAlign:'center'}} data-aos="fade-up" data-aos-once="true">UI / UX Projects</h2>
            <div className='d-flex justify-content-center'>
            <p className='project_cont' style={{width:'70%'}} data-aos="fade-up" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
            </div>

            <div  data-aos="fade-up" data-aos-once="true">
            <UiuxSlider/>
            </div>
            </div>


            
            <div style={{marginTop:'120px'}}>
            <h2 className='sub_topic' style={{textAlign:'center'}}  data-aos="fade-up" data-aos-once="true">Graphic Designs</h2>
            <div className='d-flex justify-content-center'>
            <p className='project_cont' style={{width:'70%'}}  data-aos="fade-up" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
            </div>

            <div  data-aos="fade-up" data-aos-once="true">
            <GraphicSlider/>
            </div>
            </div>


            <div className='Home_end_row' style={{marginTop:'10%'}}  data-aos="fade-up" data-aos-once="true">
               <h1 className='Home_end_slog'> <span style={{color:"rgba(0, 153, 255, 0.767)"}}>So</span>, Let's Get Started!</h1>
               <div className='d-flex justify-content-center' >
                  <Link to="/contact"><button className='contact_btn mx-auto'>Contact Me</button></Link>
               </div>
            </div>

            </MDBContainer>
            </ScrollToTop>
        </>
    );
}

export default Project;