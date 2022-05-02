import React from 'react';
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';
import git from '../img/git.png';
import dri from '../img/dri.png';
import be from '../img/be.png';
import '../css/project.css';
import DevelopmentSlider from './developmentSlider';
import UiuxSlider from './uiuxSlider';
import GraphicSlider from './graphicSlider';
import { Link } from 'react-router-dom';

function Project() {
    return(
        <>

        <MDBContainer fluid className='project_main'>
              <MDBContainer >
                <MDBRow>
                    <MDBCol size='12' className='d-flex justify-content-center'>
                        <h1 className='project_main_topic'>My <span style={{color:"rgba(0, 153, 255, 0.767)"}}> Projects</span></h1>
                    </MDBCol>
                    <MDBCol size='12' className='d-flex justify-content-center'>
                    <p className='project_cont' style={{width:'80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
                    </MDBCol>
                </MDBRow>
               </MDBContainer>
               
               <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center img_row'>
                        <img src={git} alt='' className='project_git_img img-fluid mx-auto' onClick={() => {window.location.href="https://github.com/Ruchirakavinda"}} />
                        <img src={dri} alt=''className='project_dri_img img-fluid mx-auto' onClick={() => {window.location.href="https://dribbble.com/ruchirakvnd"}}  />
                        <img src={be} alt='' className='project_be_img img-fluid mx-auto' onClick={() => {window.location.href="https://www.behance.net/ruchirakavinda"}}/>
                    </div>
               </div>
            </MDBContainer>

            <MDBContainer fluid className='projectrow2'>
            <h1 className='About_main_topic'>PROJECTS</h1>

            <div style={{marginTop:'50px'}}>
            <h2 className='sub_topic' style={{textAlign:'center'}}>Development Projects</h2>
            <div className='d-flex justify-content-center'>
            <p className='project_cont' style={{width:'70%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
            </div>

            <DevelopmentSlider/>
            </div>


            <div style={{marginTop:'120px'}}>
            <h2 className='sub_topic' style={{textAlign:'center'}}>UI / UX Projects</h2>
            <div className='d-flex justify-content-center'>
            <p className='project_cont' style={{width:'70%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
            </div>

            <UiuxSlider/>
            </div>


            
            <div style={{marginTop:'120px'}}>
            <h2 className='sub_topic' style={{textAlign:'center'}}>Graphic Designs</h2>
            <div className='d-flex justify-content-center'>
            <p className='project_cont' style={{width:'70%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula,  </p> 
            </div>

            <GraphicSlider/>
            </div>


            <div className='Home_end_row' style={{marginTop:'10%'}}>
               <h1 className='Home_end_slog'> <span style={{color:"rgba(0, 153, 255, 0.767)"}}>So</span>, Let's Get Started!</h1>
               <div className='d-flex justify-content-center' >
                  <Link to="/contact"><button className='contact_btn mx-auto'>Contact Me</button></Link>
               </div>
            </div>

            </MDBContainer>
        
          

        </>
    );
}

export default Project;