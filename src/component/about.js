import React from 'react';
import '../css/about.css';
import myimg from '../img/myimg4.png';
import tech from '../img/tech.png';
import { MDBContainer, MDBRow ,MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import DemoCarousel from './feedbackSlider';


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

                
                <MDBContainer fluid style={{padding:'0%'}}>
                    <MDBRow className='About_img_row' >
                        <img src={tech} alt='used technolgies'></img>
                    </MDBRow>
                </MDBContainer>

                <h1 className='About_main_topic'> OTHER SKILLS <span style={{color:"rgba(0, 153, 255, 0.767)"}}>AND</span> TALENTS</h1>

                <MDBContainer className='main2_cont02'>

                    <MDBRow>
                    <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                        <div className='about_shaped_div_ph'></div>
                        <div className='shaped_div_two'></div>
                    </MDBCol>
                    <MDBCol className='Home_service_col' lg='6' md='0' sm='0' >
                        <h2 className='sub_topic'>Photography and Retouching</h2>
                        <p className='cont'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. 
                        </p>

                        <Link to="/project"> <div className='service_btn'> More </div></Link>
                    </MDBCol>
                    </MDBRow>

                    <MDBRow>
                    <MDBCol className='Home_service_col ' lg='6' md='12' sm='12' >
                    <h2 className='sub_topic'>Drawing and Painting</h2>
                        <p className='cont'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi.
                        </p>
                        <Link to="/project"> <div className='service_btn'> More </div></Link>
                        
                    </MDBCol>
                    <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                    <div className='shaped_div_two' style={{marginRight:"30px"}}></div>
                    <div className='about_shaped_div_pr'></div>
                    </MDBCol>
                    </MDBRow>


                 </MDBContainer>

     {/*//////////////mobile view/////////////*/}

                 <MDBContainer className='main2_cont01_mobile'>

                    <MDBRow>
                    <MDBCol className='Home_service_col' lg='6' md='12' sm='12' >
                    <h2 className='sub_topic_mob'>Photography and Photo Retouching</h2>
                        <p className='cont_mob'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. 
                        </p>
                        <Link to="/project" className='d-flex justify-content-center'> <div className='service_btn'> More </div></Link>
                        
                    </MDBCol>
                    <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                    <div className='shaped_div_two' style={{marginRight:"30px",marginLeft:"-5px"}}></div>
                    <div className='about_shaped_div_ph'></div>
                    </MDBCol>
                    </MDBRow>


                    <MDBRow>
                    <MDBCol className='Home_service_col' lg='6' md='12' sm='12' >
                    <h2 className='sub_topic_mob'>Drawing and Painting</h2>
                        <p className='cont_mob'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. 
                        </p>
                        <Link to="/project" className='d-flex justify-content-center'> <div className='service_btn'> More </div></Link>
                        
                    </MDBCol>
                    <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                    <div className='shaped_div_two' style={{marginRight:"30px",marginLeft:"-5px"}}></div>
                    <div className='about_shaped_div_pr'></div>
                    </MDBCol>
                    </MDBRow>


                </MDBContainer>       


            <h1 className='About_main_topic' style={{paddingBottom:'0%'}}> WHAT <span style={{color:"rgba(0, 153, 255, 0.767)"}}>PEOPLE</span> SAY</h1>
            <div className='d-flex justify-content-center' >
                  <button className='contact_btn mx-auto'>Give Feedback</button>
            </div>
            <MDBContainer style={{marginTop:'50px',marginBottom:'150px'}}>
                 <DemoCarousel/>
            </MDBContainer>


            <div className='Home_end_row'>
               <h1 className='Home_end_slog'> <span style={{color:"rgba(0, 153, 255, 0.767)"}}>So</span>, Let's Get Started!</h1>
               <div className='d-flex justify-content-center' >
                  <Link to="/contact"><button className='contact_btn mx-auto'>Contact Me</button></Link>
               </div>
            </div>


           
            </MDBContainer>

       </>
    );
}

export default About;