import React from 'react';
import '../about.css';
import myimg from '../img/myimg.jpg';
import { BrowserRouter as Router } from 'react-router-dom';

function About() {
    return(
        <div className='aboutmain'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4' style={{height:'200vh'}}>

                    </div>
                    <div className='col-4' style={{backgroundColor:'white', height:'200vh'}}>
                       <img src={myimg} alt='My image'></img>
                    </div>
                    <div className='col-4' style={{backgroundColor:'blue', height:'200vh'}}>

                    </div>

                </div>

            </div>
         </div>
    );
}

export default About;