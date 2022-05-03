import React from 'react';
import '../css/contact.css';
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import myimg from '../img/myimg4.png';

function Contact() {
    return(
        <>
        
        <MDBContainer fluid className='contact_main'>
        <MDBContainer >
                <MDBRow className='contactrow1 justify-content-center'>
                    
                    <MDBCol sm='12' md='12' lg='6'  className='aboutcol3'>

                        <div>

                            <h1 className='contact_name' >Ruchira <span className='lname'>Kavinda</span></h1>
                            <h5 className='contact_cont'>Interested In Full-Stack Development, UI / UX & Graphic Design </h5> 

                        <div style={{marginTop:'3%'}}>

                            <div className='contact_iconone_cont' >
                                <i class="fas fa-at"></i>
                                <span className='address'>ruchirakvnd@gmail.com</span>
                            </div>
                            <div className='contact_iconone_cont' >
                                <i class="fas fa-phone-volume"></i>
                                <span className='address'>+94 71 0157 564</span>
                            </div>
                            <div className='contact_iconone_cont' >
                                <i class="fas fa-map-marker-alt"></i>
                                <span className='address'>Sri Lanka, Uva Province, Ella.</span>
                            </div>

                        </div>
                       </div>

                        <div> 
                            <div className="contact_social_icons">
                            <Link to ="#!">
                            <span className='contact_social'><i className="fab fa-github fa-2x" ></i></span> 
                            </Link>
                            <Link to ="#!" >
                            <span className='contact_social'><i className="fab fa-linkedin fa-2x"></i></span> 
                            </Link>
                            <Link to ="#!" >
                            <span className='contact_social'><i className="fab fa-twitter fa-2x"></i></span> 
                            </Link>
                            <Link to ="#!" >
                            <span className='contact_social'> <i className="fab fa-instagram fa-2x"></i></span> 
                            </Link>
                            </div>
                        </div>
                    </MDBCol>

                    <MDBCol sm='12' md='12' lg='3'   className='aboutcol2 d-flex justify-content-center align-items-center'>
                       <div className='contact_myimg_back_two'>
                            <div className='contact_myimg_back'>
                                <img src={myimg} alt='My image' className='contact_myimg mx-auto img-fluid'></img>
                            </div>
                        </div>
                    </MDBCol>
                    
                </MDBRow>
               </MDBContainer>
        </MDBContainer>
        </>
    );
}

export default Contact;