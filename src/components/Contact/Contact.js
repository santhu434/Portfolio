import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import {Facebook,Instagram,LinkedIn,GitHub} from '@mui/icons-material'
import './contact.css'
const Contact = () => {
  return (
   <Element className='contact' id='contact'>
     <h1>CONTACT</h1>
     <div className='contact_container'> 
        <p>
            Email:<span><a className='mail' href="mailto:santhoshrajan434@gmail.com">santhoshrajan434@gmail.com</a></span>
        </p>
        <p>
            Phone: <span>9600389074</span>
        </p>
        <div className='contact_icons'>
            <a href="https://www.linkedin.com/in/santhosh-rajan-36ba8b223/">
                <IconButton>
                    <LinkedIn/> 
                </IconButton>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009052422617">
                <IconButton>
                   <Facebook/>
                </IconButton>
            </a>
            <a href="https://instagram.com/santhoshrajan__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <IconButton>
                   <Instagram/>
                </IconButton>
            </a>
            <a href="https://github.com/santhu434">
                <IconButton>
                 <GitHub/>
                </IconButton>
            </a>
        </div>
     </div>
   </Element>
  )
}

export default Contact