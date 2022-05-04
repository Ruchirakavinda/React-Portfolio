import React, {useEffect} from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'; 
import '../css/home.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import q1 from '../img/q1.png';
import q2 from '../img/q2.png';
import q3 from '../img/q3.png';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

// import logo from '../img/logo.png'

function Home() {

   useEffect(()=>{
      Aos.init({
        duration:1000
      })
  
    }, []);

 

    return(
       <ScrollToTop>
       <div>
        <MDBContainer fluid className="main">
        <MDBRow>
            {/* <MDBCol lg="1" sm="0">
               <h1 className="bracket1">&#123;</h1> 
            </MDBCol> */}
            
            <MDBCol  size="12" style={{textAlign:'center', width:'100%'}} >
            {/* <div className="shine mx-auto">
               <img src={logo} className="logoimg"/>
               </div> */}
            <div className=" home" data-aos="fade-down" data-aos-once="true">
                 <span className='iam' >Hi,  I'm </span>
                 <h1 className='name' >Ruchira <span className='lname'>Kavinda</span></h1><p className='skill'>Interested In Full-Stack Development,<br/> UI / UX & Graphic Design</p>

              <hr className='hr1'/>

                 {/* <p className='info'>Management Information Systems Undergraduate (Special) At NSBM Green University Town, Sri Lanka.</p><br/> */}

                <button className='cv mx-auto' data-aos="fade-up" data-aos-once="true">Download CV</button>
                 
            </div>
            </MDBCol>
            {/* <MDBCol  lg="1" sm="0">
                 <h1 className="bracket2">&#125;</h1> 
            </MDBCol> */}
           
         </MDBRow>
         </MDBContainer>

         <MDBContainer fluid className="main2" >

            <MDBContainer className='main2_cont01'>
               <MDBRow data-aos="fade-up" data-aos-once="true">
                  <MDBCol className='Home_Quality ' lg='4' md='4' sm='4'>
                     <div className='d-flex justify-content-center'>
                        <div className='Home_Quality_Div d-flex align-items-center justify-content-center'>
                           <img src={q1} alt="q1" className='mx-auto' style={{ width : "70%"}}/>
                        </div>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <p className='Home_Quality_Text'>Unique</p>
                     </div>
                  </MDBCol>
                  <MDBCol className='Home_Quality  ' lg='4' md='4' sm='4'>
                     <div className='d-flex justify-content-center'>
                        <div className='Home_Quality_Div d-flex align-items-center justify-content-center'>
                           <img src={q2} alt="q2" className='mx-auto' style={{ width : "50%"}}/>
                        </div>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <p className='Home_Quality_Text'>Standard Quality</p>
                     </div>
                  </MDBCol>
                  <MDBCol className='Home_Quality ' lg='4' md='4' sm='4'>
                     <div className='d-flex justify-content-center'>
                        <div className='Home_Quality_Div d-flex align-items-center justify-content-center'>
                           <img src={q3} alt="q3" className='mx-auto' style={{ width : "50%"}}/>
                        </div>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <p className='Home_Quality_Text'>Creative</p>
                     </div>
                  </MDBCol>
               </MDBRow>
         
            </MDBContainer>

            <h1 className='Home_slog_One' data-aos="fade-up" data-aos-once="true">
               EXPAND THE LIFE <span style={{color:"rgba(0, 153, 255, 0.767)"}}>ONE PIXEL</span> AT A TIME
            </h1>
            
            <MDBContainer className='main2_cont02'>

               <MDBRow data-aos="fade-up" data-aos-once="true">
                 <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                    <div className='shaped_div_fs'></div>
                    <div className='shaped_div_two'></div>
                 </MDBCol>
                 <MDBCol className='Home_service_col' lg='6' md='0' sm='0' >
                    <h2 className='sub_topic'>Full-Stack Development</h2>
                    <p className='cont'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. Aliquip labore ea laborum occaecat elit id veniam in sint magna esse laborum eu. Ullamco quis aliqua proident eiusmod ut cillum veniam ea voluptate.
                    </p>

                   <Link to="/project"> <div className='service_btn'> More </div></Link>
                 </MDBCol>
               </MDBRow>

               <MDBRow data-aos="fade-up" data-aos-once="true">
                 <MDBCol className='Home_service_col ' lg='6' md='12' sm='12' >
                 <h2 className='sub_topic'>UI / UX Design</h2>
                    <p className='cont'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. Aliquip labore ea laborum occaecat elit id veniam in sint magna esse laborum eu. Ullamco quis aliqua proident eiusmod ut cillum veniam ea voluptate.
                    </p>
                    <Link to="/project"> <div className='service_btn'> More </div></Link>
                   
                 </MDBCol>
                 <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                 <div className='shaped_div_two' style={{marginRight:"30px"}}></div>
                 <div className='shaped_div_uiux'></div>
                 </MDBCol>
               </MDBRow>

               <MDBRow data-aos="fade-up" data-aos-once="true">
                 <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                    <div className='shaped_div_gd'></div>
                    <div className='shaped_div_two'></div>
                 </MDBCol>
                 <MDBCol className='Home_service_col' lg='6' md='0' sm='0' >
                    <h2 className='sub_topic'>Graphic Design</h2>
                    <p className='cont'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. Aliquip labore ea laborum occaecat elit id veniam in sint magna esse laborum eu. Ullamco quis aliqua proident eiusmod ut cillum veniam ea voluptate.
                    </p>

                   <Link to="/project"> <div className='service_btn'> More </div></Link>
                 </MDBCol>
               </MDBRow>
         
            </MDBContainer>

{/*///////////////////////////*/}

            <MDBContainer className='main2_cont01_mobile'>

               <MDBRow data-aos="fade-up" data-aos-once="true">
                 <MDBCol className='Home_service_col' lg='6' md='12' sm='12' >
                 <h2 className='sub_topic_mob'>Full-Stack Development</h2>
                    <p className='cont_mob'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. Aliquip labore ea laborum occaecat elit id veniam in sint magna esse laborum eu. Ullamco quis aliqua proident eiusmod ut cillum veniam ea voluptate.
                    </p>
                    <Link to="/project" className='d-flex justify-content-center'> <div className='service_btn'> More </div></Link>
                   
                 </MDBCol>
                 <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                 <div className='shaped_div_two' style={{marginRight:"30px",marginLeft:"-5px"}}></div>
                 <div className='shaped_div_fs'></div>
                 </MDBCol>
               </MDBRow>


               <MDBRow data-aos="fade-up" data-aos-once="true">
                 <MDBCol className='Home_service_col' lg='6' md='12' sm='12' >
                 <h2 className='sub_topic_mob'>UI / UX Design</h2>
                    <p className='cont_mob'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. Aliquip labore ea laborum occaecat elit id veniam in sint magna esse laborum eu. Ullamco quis aliqua proident eiusmod ut cillum veniam ea voluptate.
                    </p>
                    <Link to="/project" className='d-flex justify-content-center'> <div className='service_btn'> More </div></Link>
                   
                 </MDBCol>
                 <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                 <div className='shaped_div_two' style={{marginRight:"30px",marginLeft:"-5px"}}></div>
                 <div className='shaped_div_uiux'></div>
                 </MDBCol>
               </MDBRow>

               <MDBRow data-aos="fade-up" data-aos-once="true">
                 <MDBCol className='Home_service_col' lg='6' md='12' sm='12' >
                 <h2 className='sub_topic_mob'>Graphic Design</h2>
                    <p className='cont_mob'>Nulla occaecat in voluptate excepteur cupidatat incididunt ut anim dolor. Ex reprehenderit cillum id exercitation eu fugiat laborum adipisicing excepteur duis. Et nisi non proident cillum anim labore. Aliquip non anim ad quis incididunt cupidatat ut est reprehenderit in nisi. Aliquip labore ea laborum occaecat elit id veniam in sint magna esse laborum eu. Ullamco quis aliqua proident eiusmod ut cillum veniam ea voluptate.
                    </p>
                    <Link to="/project" className='d-flex justify-content-center'> <div className='service_btn'> More </div></Link>
                   
                 </MDBCol>
                 <MDBCol className='Home_service_col d-flex justify-content-center' lg='6' md='12' sm='12' >
                 <div className='shaped_div_two' style={{marginRight:"30px",marginLeft:"-5px"}}></div>
                 <div className='shaped_div_gd'></div>
                 </MDBCol>
               </MDBRow>

               
         
            </MDBContainer>

            <div className='Home_end_row' data-aos="fade-up" data-aos-once="true">
               <h1 className='Home_end_slog'> <span style={{color:"rgba(0, 153, 255, 0.767)"}}>So</span>, Let's Get Started!</h1>
               <div className='d-flex justify-content-center' >
                  <Link to="/contact"><button className='contact_btn mx-auto'>Contact Me</button></Link>
               </div>
            </div>

         </MDBContainer>
         </div>
         </ScrollToTop>
    );
}

export default Home;