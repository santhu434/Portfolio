import React from 'react'
import { Link } from 'react-scroll'
import './topcontent.css'
import './cvbutton.css'
function Topcontent() {
  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <div class="container">
          <span data-title=" Santhosh.R" class="text">
            Santhosh.R
          </span>
        </div>
        <p>A professional Web Developer</p>
        <a href="Santhosh Professional CV.pdf">
          <button className='topcontent_dawnloadButton'>Dawnload CV</button>
        </a>
        <Link to='project' smooth={true} duration={500}>
          <button className='topcontent_workButton'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default Topcontent