import React from 'react';
import '../css/home.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import q1 from '../img/q1.png';
import q2 from '../img/q2.png';
import q3 from '../img/q3.png';

// import logo from '../img/logo.png'

function Home() {
    return(
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
            <div className=" home">
                 <span className='iam'>Hi,  I'm </span>
                 <h1 className='name'>Ruchira <span className='lname'>Kavinda</span></h1><p className='skill'>Interested In Full Stack Developing,<br/> UI / UX & Graphic Designing</p>

              <hr className='hr1'/>

                 {/* <p className='info'>Management Information Systems Undergraduate (Special) At NSBM Green University Town, Sri Lanka.</p><br/> */}

                <button className='cv mx-auto'>Download CV</button>
                 
            </div>
            </MDBCol>
            {/* <MDBCol  lg="1" sm="0">
                 <h1 className="bracket2">&#125;</h1> 
            </MDBCol> */}
           
         </MDBRow>
         </MDBContainer>

         <MDBContainer fluid className="main2" >

            <MDBContainer className='main2_cont01'>
               <MDBRow>
                  <MDBCol className='Home_Quality ' lg='4' md='4' sm='4'>
                     <div className='d-flex justify-content-center'>
                        <div className='Home_Quality_Div d-flex align-items-center justify-content-center'>
                           <img src={q1} alt="q1" className='mx-auto' style={{ width : "70%"}}/>
                        </div>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <p className='Home_Quality_Text'>Unique Design</p>
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
                        <p className='Home_Quality_Text'>Creative Ideas</p>
                     </div>
                  </MDBCol>
               </MDBRow>
         
            </MDBContainer>

            <h1 className='Home_slog_One'>
               EXPAND THE LIFE <span style={{color:"rgba(0, 153, 255, 0.767)"}}>ONE PIXEL</span> AT A TIME
            </h1>
            
            <MDBContainer className='main2_cont01'>
               <MDBRow>
                  <MDBCol className='Home_Quality ' lg='4' md='4' sm='4'>
                     <div className='d-flex justify-content-center'>
                        <div className='Home_Quality_Div d-flex align-items-center justify-content-center'>
                           <img src={q1} alt="q1" className='mx-auto' style={{ width : "70%"}}/>
                        </div>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <p className='Home_Quality_Text'>Unique Design</p>
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
                        <p className='Home_Quality_Text'>Creative Ideas</p>
                     </div>
                  </MDBCol>
               </MDBRow>
         
            </MDBContainer>

         </MDBContainer>
         </div>
    );
}

export default Home;