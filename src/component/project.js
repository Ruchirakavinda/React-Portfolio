import React from 'react';
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../css/project.css';

function Project() {
    return(
        <>
        <MDBContainer fluid className='project_main'>
              <MDBContainer>
                <MDBRow className='aboutrow1' >
                    <MDBCol md='12' lg='4' className='aboutcol1' >
                        <h1 className='aboutname'>DESIGNER </h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p>
                    </MDBCol>


                    <MDBCol md='12' lg='4'  className='aboutcol3'>
                        <h1 className='aboutname'>DEVELOPER</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p> 
                    </MDBCol>
                </MDBRow>
               </MDBContainer>
            </MDBContainer>
        
        </>
    );
}

export default Project;