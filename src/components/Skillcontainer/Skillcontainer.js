import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../assets/skills.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import './skillcontainer.css'
import './pulse.css'
function Skillcontainer() {
   return (
      <><div className="sectionskilltitle">
         <h2>Skills</h2>
         <span className="headerskillLine"></span>
      </div><Element className='skillcontainer' id='skills'>
            <div class="skill-bars">
               <div class="bar">
                  <div class="info">
                     <span>ReactJs</span>
                  </div>
                  <div class="progress-line html">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Redux,Redux Toolkit</span>
                  </div>
                  <div class="progress-line html">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>NextJs</span>
                  </div>
                  <div class="progress-line css">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Typescript</span>
                  </div>
                  <div class="progress-line jquery">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Javascript</span>
                  </div>
                  <div class="progress-line python">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Node</span>
                  </div>
                  <div class="progress-line mysql">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Restfull API</span>
                  </div>
                  <div class="progress-line html">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Material UI</span>
                  </div>
                  <div class="progress-line css">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Ant Design</span>
                  </div>
                  <div class="progress-line jquery">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Tailwind</span>
                  </div>
                  <div class="progress-line python">
                     <span></span>
                  </div>
               </div>
               <div class="bar">
                  <div class="info">
                     <span>Shadcn</span>
                  </div>
                  <div class="progress-line mysql">
                     <span></span>
                  </div>
               </div>
            </div>
         </Element></>
   )
}

export default Skillcontainer