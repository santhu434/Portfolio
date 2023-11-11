import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent'
import './topcontainer.css'

function Topcontainer() {
  return (
   <Element name='about' className='topcontainer'>
   <Topcontent/>
   </Element>
  )
}

export default Topcontainer