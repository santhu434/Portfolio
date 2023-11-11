import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import {Facebook,Instagram,LinkedIn} from '@mui/icons-material'
import './contact.css'
const Contact = () => {
  return (
   <Element className='contact' id='contact'>
     <h1>Contact</h1>
     <div className='contact_container'> 
        <p>
            Email:<span>santhoshrajan434@gmail.com</span>
        </p>
        <p>
            Github Username: <span>santhu434</span>
        </p>
        <div className='contact_icons'>
            <a href="">
                <IconButton>
                    <LinkedIn/> 
                </IconButton>
            </a>
            <a href="">
                <IconButton>
                   <Facebook/>
                </IconButton>
            </a>
            <a href="">
                <IconButton>
                   <Instagram/>
                </IconButton>
            </a>
        </div>
     </div>
   </Element>
  )
}

export default Contact