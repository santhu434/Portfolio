import React from 'react'
import {Link} from 'react-scroll'
import './header.css'
function Header() {
  return (
  <>
  <header class="header">
  <nav>
    <div class="logo">
      <a href="index.html">Develop<span>er</span></a>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
    <Link to='about' smooth={true} duration={500}>
      <li><a>About Me</a></li>
    </Link>
      <Link to='exp' smooth={true} duration={500}>
      <li><a>Experience</a></li>
      </Link>
      <Link to='project' smooth={true} duration={500}>
      <li><a>Projects</a></li>
      </Link>
      <Link to='skills' smooth={true} duration={500}>
      <li><a>Skills</a></li>
      </Link>
      <Link to='contact' smooth={true} duration={500}>
      <li><a>Contact</a></li>
      </Link>
    </ul>
  </nav>
</header></>
  )
}

export default Header
