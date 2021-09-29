import React from 'react';
import '../css/about.css';
import myimg from '../img/myimg.jpg';
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
                        <h1 className='aboutname'>&#10100; CODER &#10101;</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p> 
                    </MDBCol>
                </MDBRow>
               </MDBContainer>
            </MDBContainer>
 

            <MDBContainer fluid className='aboutrow2' >
               <MDBContainer>
                    <MDBRow>
                        <MDBCol lg='8' md='12' className='mx-auto'>
                        <div className='crd1 mx-auto'>
                            <h1 className='crdtopic'>Current</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula</p>
                        </div>
                        </MDBCol>
                        <MDBCol lg='8'  md='12' className='mx-auto'>
                        <div className='crd1 mx-auto'>
                            <h1 className='crdtopic'>Current</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula</p>
                        </div>
                        </MDBCol>
                        <MDBCol lg='8' md='12'  className='mx-auto'>
                        <div className='crd1 mx-auto'>
                            <h1 className='crdtopic'>Current</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula</p>
                        </div>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </MDBContainer>

       </>
    );
}

export default About;