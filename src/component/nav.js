import React from 'react';
import '../css/nav.css';
import togmenu from '../main.js';
import Gohome from "../main.js";
import nav1 from '../img/nav1.jpg';
import nav2 from '../img/nav2.jpg';
import logo from '../img/logo.png';
import myimg from '../img/myimg.jpg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className='navbar1' >
        <Link to='/about'>
          <img src={myimg} alt='Nav bar logo' className='navlogo'/>
        </Link>
        
        <Link to='/'>
          <span className='slog'>Ruchira Kavinda </span>
        </Link>
        
          <div className='menu' onClick={togmenu} id='menu1'>
            <span className='menu_line' id='lines'></span>
          </div>
          <p className='menufont'onClick={togmenu}>Menu</p>
        
        <nav className='tognav' id='tog1'>
        
          <ul className='nav'>
            <Link to='/' className='nav_item active' onClick={togmenu}>
              <li id='item1'>Home</li>
            </Link>
            <Link to='/about' className='nav_item' onClick={togmenu}>
              <li id='item2'> About Me</li>
            </Link>
            <Link to='/project' className='nav_item' onClick={togmenu}>
              <li id='item3'> My Projects</li>
            </Link>
            <Link to='/contact' className='nav_item' onClick={togmenu}>
              <li id='item4'> Contact Me</li>
            </Link>
          </ul>
        </nav>
        <div className='nav1' id='nav1'>
          <img src={nav1} alt='Nav bar logo' className='nav1img' id='navimg' />

        </div>
        <div className='nav2' id='nav2'>
        <img src={nav2} alt='Nav bar logo' className='nav2img' id='nav2img'/>

        </div>
      </div>
    </header>
    
  );
}

export default Nav;