import React from 'react';
import '../css/nav.css';
import togmenu from '../main.js';
import nav1 from '../img/nav1.jpg';
import nav2 from '../img/nav2.jpg';
import SocialHide from './socialHide.js';
import myimg from '../img/myimg4.png';
import {NavLink } from 'react-router-dom';

function Nav() {

  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      //navbar
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.transition="0.5s";
      //footer
      document.getElementById("footer").style.bottom = "0";
      document.getElementById("footer").style.transition="0.5s";

      document.getElementById("copyright").style.bottom = "0";
      document.getElementById("copyright").style.transition="0.5s";
      
    } else {
      //navbar
      document.getElementById("navbar").style.top = "-150px";
      //footer
      document.getElementById("footer").style.bottom = "-250px";

      document.getElementById("copyright").style.bottom = "-250px";
      
      
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <header >
      <div className='navbar1' id='navbar' onClick={SocialHide}>
        <NavLink to='/ '>
          <img src={myimg} alt='Nav bar logo' className='navlogo' />
        </NavLink>
        
       
        
          <div className='menu' onClick={togmenu} id='menu1'>
            <span className='menu_line' id='lines'></span>
          </div>
          <p className='menufont'onClick={togmenu}>Menu</p>
        
        <nav className='tognav' id='tog1'>
        
          <ul className='nav'>
            <NavLink to='/ ' className='nav_item ' activeClassName="nav_item2" onClick={togmenu}>
              <li id='item1'>Home</li>
            </NavLink>
            <NavLink to='/about' className='nav_item' activeClassName="nav_item2" onClick={togmenu}>
              <li id='item2'> About Me</li>
            </NavLink>
            <NavLink to='/project' className='nav_item' activeClassName="nav_item2" onClick={togmenu}>
              <li id='item3'> My Projects</li>
            </NavLink>
            <NavLink to='/contact' className='nav_item' activeClassName="nav_item2" onClick={togmenu}>
              <li id='item4'> Contact Me</li>
            </NavLink>
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