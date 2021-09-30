import React from 'react';
import '../css/home.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import logo from '../img/logo.png'

function Home() {
    return(
       <div>
        <MDBContainer fluid className="main">
        <MDBRow>
            {/* <MDBCol lg="1" sm="0">
               <h1 className="bracket1">&#123;</h1> 
            </MDBCol> */}
            
            <MDBCol  size="12" style={{textAlign:'center', width:'100%'}} >
            <div className="shine mx-auto"><img src={logo} className="logoimg"/></div>
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

         <MDBContainer fluid className="main2">

         </MDBContainer>
         </div>
    );
}

export default Home;