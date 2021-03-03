import React from 'react';
import '../footer.css';
import { BrowserRouter as Router } from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <div className='row'>
        
        <div className="social-icons ">
        <a href="#!" className='social'>
          <i className="fab fa-twitter fa-2x"></i>
        </a><br/>
        <a href="#!" className='social'>
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="#!" className='social'>
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#!" className='social'>
          <i className="fab fa-github fa-2x"></i>
        </a>
       </div>
       <span className='cright '>&copy; Copyright Ruchira Kavinda 2021</span>
       </div>

       </div>

    );
    
}
 export default Footer;