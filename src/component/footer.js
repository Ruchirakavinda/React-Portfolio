import React from 'react';
import '../css/footer.css';
import { MDBContainer} from 'mdb-react-ui-kit';
import { MDBLink } from 'mdbreact';
import SocialHide from './socialHide';


function Footer() {


   
    return(
        <MDBContainer fluid className='footer' id='footer'>
        
        
       
        <div className={window.location.pathname==="/contact"?"social-icons-none":'social-icons'} id='hideID'>
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
       <div className='cright ' id='copyright'>&copy; Copyright Ruchira Kavinda 2021</div>

       </MDBContainer>

    );
    
}
 export default Footer;