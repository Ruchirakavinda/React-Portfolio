import React from 'react';
import '../css/home.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

function Home() {
    return(
       <div>
        <MDBContainer fluid className="main">
        <MDBRow>
            {/* <MDBCol lg="1" sm="0">
               <h1 className="bracket1">&#123;</h1> 
            </MDBCol> */}
            <MDBCol  size="12" >
            <div className=" home">
                 <span className='iam'>Hi,  I'm </span>
                 <h1 className='name'>Ruchira <span className='lname'>Kavinda</span></h1><p className='skill'>Interested In Full Stack Developing,<br/> UI / UX & Graphic Designing</p>

              <hr className='hr1'/>

                 {/* <p className='info'>Management Information Systems Undergraduate (Special) At NSBM Green University Town, Sri Lanka.</p><br/> */}

                 <a href='#'><div className='cv mx-auto'>Download CV</div></a>
                 
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