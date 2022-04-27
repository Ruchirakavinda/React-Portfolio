import React from 'react';
import '../css/about.css';
import myimg from '../img/myimg4.png';
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';


function About() {
    return(
      <>
            <MDBContainer fluid className='aboutmain'>
              <MDBContainer>
                <MDBRow className='aboutrow1' >
                    <MDBCol md='12' lg='4' className='aboutcol1' >
                        <h1 className='aboutname'>DESIGNER </h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p>
                    </MDBCol>

                    <MDBCol md='12' lg='4'  className='aboutcol2' style={{textAlign:'center'}}>
                      <img src={myimg} alt='My image' className='myimg mx-auto img-fluid'></img>
                    </MDBCol>

                    <MDBCol md='12' lg='4'  className='aboutcol3'>
                        <h1 className='aboutname'>DEVELOPER</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p> 
                    </MDBCol>
                </MDBRow>
               </MDBContainer>
            </MDBContainer>
 

            <MDBContainer fluid className='aboutrow2'>
               <MDBContainer>
                    <MDBRow>
                        <MDBCol lg='10' md='12' sm='12' className='mx-auto'>
                        <div className='crd1 mx-auto'>
                        <MDBContainer>
                        <MDBRow>
                            <MDBCol lg='6'>
                            <h1 className='crdtopic' style={{color:"rgba(0, 153, 255, 0.767)"}}>I AM</h1>
                            <p className='crdtopic'>PROFESSIONAL FULL-STACK DEVELOPER AND UI /UX AND GRAPHIC DESIGNER</p>
                            </MDBCol>
                            <MDBCol lg='6'>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula</p>
                            </MDBCol>
                        </MDBRow>
                        </MDBContainer>
                        </div>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>

                <h1 className='About_main_topic'> WHAT I <span style={{color:"rgba(0, 153, 255, 0.767)"}}>DO</span>...</h1>
                
                <MDBContainer>
                    <MDBRow className='d-flex justify-content-center'>
                        <MDBCol lg='4' md='6' sm='12' className='d-flex justify-content-center'>
                            <div className='wid_crd1'>
                            <h1 className='crdtopic'>Full-Stack Development</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                            </div>
                        </MDBCol>
                        <MDBCol lg='4' md='6' sm='12' className='d-flex justify-content-center'>
                            <div className='wid_crd2'>
                            <h1 className='crdtopic'>UI / UX Design</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                            </div>
                        </MDBCol>
                        <MDBCol lg='4' md='6' sm='12' className='d-flex justify-content-center'>
                            <div className='wid_crd1'>
                            <h1 className='crdtopic'>Graphic Design</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                
                <h1 className='About_main_topic'> WHAT I <span style={{color:"rgba(0, 153, 255, 0.767)"}}>DO</span>...</h1>
            </MDBContainer>

       </>
    );
}

export default About;