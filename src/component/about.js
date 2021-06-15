import React from 'react';
import '../about.css';
import myimg from '../img/myimg.jpg';
import { BrowserRouter as Router } from 'react-router-dom';


function About() {
    return(
        <div className='aboutmain'>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-4 aboutcol1' >
                        <h1 className='aboutname'>DESIGNER </h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p>
                    </div>

                    <div className='col-4 aboutcol2' style={{textAlign:'center'}}>
                      <img src={myimg} alt='My image' className='myimg mx-auto'></img>
                    </div>

                    <div className='col-4 aboutcol3'>
                        <h1 className='aboutname'>&#10100; CODER &#10101;</h1>
                            <p className='aboutcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula, massa lorem tincidunt quam, at tincidunt libero enim ac leo. Maecenas eu nulla ornare, faucibus magna sit amet, ornare dolor. </p> 

                </div>

            </div>
         </div>
        </div>
    );
}

export default About;