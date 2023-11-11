import React from 'react'
import { Link } from 'react-scroll'
import './topcontent.css'
function Topcontent() {
  return (
    <div className='topcontent'>
     <div className='topcontent_container'>
      <h1>Santhosh.R</h1>
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