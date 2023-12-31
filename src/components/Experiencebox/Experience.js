import React from 'react'
import './experience.css'
function Experience({number,title,role,style}) {
  return (
    <div style={{...style}} className='experience'>
     <h1>{role}</h1>
     <p>{title}</p>
     <p>{number}</p>
    </div>
  )
}

export default Experience