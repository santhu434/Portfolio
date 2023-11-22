import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../Experiencebox/Experience'
import './experiencecontainer.css'
const Experiencecontainer = () => {
  return (
    <Element className='experiencecontainer' id='exp'>
     <h1>EXPERIENCE</h1>
     <div className='experiencecontainer_info'>
        <Experience number='March 2023- Present' title='Mallow Technologies' role='React Developer'/>
        <Experience number='Nov 2022-Jan 2023' title='Awerum software solutions' role='Internship'/>
        <Experience number='6+' title='Projects' style={{backgroundColor:'#f64c08'}}/>
        <Experience number='9' title='Months' role='React Developer'/>
     </div>
    </Element>
  )
}

export default Experiencecontainer