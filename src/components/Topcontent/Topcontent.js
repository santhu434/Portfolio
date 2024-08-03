import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './topcontent.css';
import './cvbutton.css';
import profile from '../../assets/profile2.png';
import Typewriter from 'typewriter-effect/dist/core';

function Topcontent() {
  useEffect(() => {
    var app = document.getElementById('animate-text');

    var typewriter = new Typewriter(app, {
      loop: true,
    });

    typewriter
      .typeString('Santhosh.R')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Web Developer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<strong>FrontEnd Developer</strong>')
      .pauseFor(2500)
      .start();
  }, []);

  return (
    <div className='topcontent'>
      <div className='image_profile'>
        <img src={profile} alt='Profile' />
      </div>
      <div className='topcontent_container'>
        <div id='animate-text'></div>
        <a href='Santhosh Professional CV.pdf'>
          <button className='topcontent_dawnloadButton'>Download CV</button>
        </a>
        <Link to='project' smooth={true} duration={500}>
          <button className='topcontent_workButton'>My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Topcontent;
