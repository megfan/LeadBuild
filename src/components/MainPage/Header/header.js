import React from 'react';
import logo from '../../../images/logo.png'
// import './header.scss'

function Header() {
  return (
    <header>
        <div className="navigation">
            <div className="logo">
                <img src={logo} alt="LB"/>
            </div>
            <div className="nav">
              <div className="nav_toggle">
                <span></span>
              </div>
            </div>
        </div>
        <div className="main_title">
            <h1>Dream Heaven City</h1>
            <p>If you are looking at blank cassettes on the web Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt.</p>
            <a class="btn" href="#/">Details</a>
        </div>
        
    </header>
  );
}

export default Header;