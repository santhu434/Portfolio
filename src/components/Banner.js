import React, { useEffect } from 'react';
import Profile from './profile2.png'
import './banner.css'
import Typewriter from 'typewriter-effect/dist/core';
import { Link } from 'react-scroll'

const Banner = () => {
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
        <>
            <div className='banner-container'>
                <img src={Profile}></img>
                <div className='topcontent_container'>
                    <div id='animate-text'></div>
                   <div className='buttons'>
                   <a href='Santhosh Professional CV.pdf'>
                        <button className='topcontent_dawnloadButton'>Download CV</button>
                    </a>
                    <Link to='project' smooth={true} duration={500}>
                        <button className='topcontent_workButton'>My Work</button>
                    </Link>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Banner