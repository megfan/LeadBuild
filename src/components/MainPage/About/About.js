import React from 'react';

function About() {
  return (
    <div className='about container'>
        <div className="main-content">
            <div className="image_box">
              <div className="image">
                <h3>16</h3>
                <p>Years of Creativity</p>
              </div>
            </div>
            <div className="text_box">
              <h2>About us</h2>
              <h1>We've been creating <br/> Awesome since 1999</h1>
              <p><span>If you are</span> looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<br/><br/>If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <a class="btn btn-left" href="#/">Read more</a>
            </div>
        </div>
        <div className="details">
          <div className="details_box">
            <h4>186+</h4>
            <p>Projects done</p>
          </div>  
          <div className="details_box">
            <h4>932+</h4>
            <p>Happy Clients</p>
          </div> 
          <div className="details_box">
            <h4>223+</h4>
            <p>Professionals</p>
          </div> 
          <div className="details_box">
            <h4>3000+</h4>
            <p>Cups of coffe</p>
          </div>         
        </div>
        
    </div>
  );
}

export default About;