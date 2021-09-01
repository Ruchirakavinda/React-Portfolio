import React from 'react';
import '../css/footer.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import { MDBLink } from 'mdbreact';


function Footer() {
    return(
        <MDBContainer fluid className='footer'>
        
        
        <div className="social-icons ">
        <MDBLink to ="#!">
         <span className='social'><i className="fab fa-github fa-2x" ></i></span> 
        </MDBLink>
        <MDBLink to ="#!" >
          <span className='social'><i className="fab fa-linkedin fa-2x"></i></span> 
        </MDBLink>
        <MDBLink to ="#!" >
          <span className='social'><i className="fab fa-twitter fa-2x"></i></span> 
        </MDBLink>
        <MDBLink to ="#!" >
         <span className='social'> <i className="fab fa-instagram fa-2x"></i></span> 
        </MDBLink>
       </div>
       <span className='cright '>&copy; Copyright Ruchira Kavinda 2021</span>

       </MDBContainer>

    );
    
}
 export default Footer;