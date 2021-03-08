import React from 'react';
import '../home.css';
import { BrowserRouter as Router } from 'react-router-dom';

function Home() {
    return(
        <div className='main'>
            <div className="container-fluid home">
                 <span className='iam'>I'm </span>
                 <h1 className='name'>Ruchira <span className='lname'>Kavinda. </span></h1><p className='skill'>FrontEnd & BackEnd Developer <br/> UI / UX & Graphic Designer</p>

                 <hr className='hr1' />

                 <p className='info'>Undergraduate Of Management Information Systems At NSBM Green University Town.</p><br/>

                 <a href='#'><div className='cv mx-auto'>Download CV</div></a>
                 
            </div>
         </div>
    );
}

export default Home;