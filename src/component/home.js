import React from 'react';
import '../home.css';
import { BrowserRouter as Router } from 'react-router-dom';

function Home() {
    return(
        <div className='main'>
            <div className="container-fluid home">
                 <span className='iam'>I'm </span>
                 <h1 className='name'>Ruchira <span className='lname'>Kavinda. </span></h1><p className='skill'>Interested In Full Stack Developing <br/> UI / UX & Graphic Designing</p>

                 <hr className='hr1' />

                 {/* <p className='info'>Management Information Systems Undergraduate (Special) At NSBM Green University Town, Sri Lanka.</p><br/> */}

                 <a href='#'><div className='cv mx-auto'>Download CV</div></a>
                 
            </div>
         </div>
    );
}

export default Home;