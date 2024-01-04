import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../assets/skills.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import './skillcontainer.css'

function Skillcontainer() {
  return (
    <Element className='skillcontainer' id='skills'>
    <div className='skillcontainer_image'>
        <img src={skillimg} alt="" />
    </div>
    <div className='skillcontainer_text'>
      <h1>SKILLSET</h1>
      <div className='skillcontainer_skillset'>
         <h5>React</h5>
         <div className='skillcontainer_slider skillcontainer_slider1'>
         <LinearProgress variant='determinate' value={90}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>Core Java</h5>
         <div className='skillcontainer_slider skillcontainer_slider2'>
         <LinearProgress variant='determinate' value={80}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>Flutter</h5>
         <div className='skillcontainer_slider skillcontainer_slider3'>
         <LinearProgress variant='determinate' value={75}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>NodeJs</h5>
         <div className='skillcontainer_slider skillcontainer_slider4'>
         <LinearProgress variant='determinate' value={75}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>SQL</h5>
         <div className='skillcontainer_slider skillcontainer_slider5'>
         <LinearProgress variant='determinate' value={90}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>RestAPI</h5>
         <div className='skillcontainer_slider skillcontainer_slider6'>
         <LinearProgress variant='determinate' value={90}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
      <h5>Javascript</h5>
         <div className='skillcontainer_slider skillcontainer_slider7'>
         <LinearProgress variant='determinate' value={95}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
      <h5>Material UI</h5>
         <div className='skillcontainer_slider skillcontainer_slider8'>
         <LinearProgress variant='determinate' value={90}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
      <h5>React Ant Design</h5>
         <div className='skillcontainer_slider skillcontainer_slider9'>
         <LinearProgress variant='determinate' value={90}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>Tailwind</h5>
         <div className='skillcontainer_slider skillcontainer_slider10'>
         <LinearProgress variant='determinate' value={80}/>
         </div>
      </div>
      <div className='skillcontainer_skillset'>
         <h5>HTML-5,CSS</h5>
         <div className='skillcontainer_slider skillcontainer_slider11'>
         <LinearProgress variant='determinate' value={80}/>
         </div>
      </div>
    </div>
    </Element>
  )
} 

export default Skillcontainer