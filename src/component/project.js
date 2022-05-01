import React from 'react';
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import git from '../img/git.png';
import dri from '../img/dri.png';
import be from '../img/be.png';
import '../css/project.css';

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
                        <img src={git} alt='' className='project_git_img img-fluid mx-auto' />
                        <img src={dri} alt=''className='project_dri_img img-fluid mx-auto' />
                        <img src={be} alt='' className='project_be_img img-fluid mx-auto' />
                    </div>
               </div>
            </MDBContainer>
        
        </>
    );
}

export default Project;