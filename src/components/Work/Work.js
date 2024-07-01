import './work.css'
import shopoImage from '../../assets/ShoppingApp.jpg'
import amazon from '../../assets/Amazon.jpg'
import piza from '../../assets/Pizza.png'
import social from '../../assets/socialApp.jpg'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material'

function Work() {
  return (
    <>
    <div className="sectionprojecttitle" id='project'>
         <h2>Projects</h2>
         <span className="headerprojectLine"></span>
      </div>
    <div class="work_container">
      <div class="card">
        <div class="imgBx">
          <img src={shopoImage} alt="" />
        </div>
        <div class="details">
          <div class="content">
            <h3>OREBI<br></br>
              <span>Shopping Application</span>
            </h3>
            <ul>
              <li> <a href="https://github.com/santhu434/React-E-commerce-App">
                <GitHub />
              </a></li>
            </ul>
            <a href="https://main--beautiful-pastelito-d8fa2b.netlify.app/">Explore</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={amazon} alt="" />
        </div>
        <div class="details">
          <div class="content">
            <h3>Amazon<br></br>
              <span>Clone Application</span>
            </h3>
            <ul>
              <li> <a href="https://github.com/santhu434/React-E-commerce-App">
                <GitHub />
              </a></li>
            </ul>
            <a href="https://amazonyoutube.vercel.app/">Explore</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={piza} alt="" />
        </div>
        <div class="details">
          <div class="content">
            <h3>Pizza<br></br>
              <span>Order your food</span>
            </h3>
            <a href="https://illustrious-khapse-51892f.netlify.app/#home">Explore</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={social} alt="" />
        </div>
        <div class="details">
          <div class="content">
            <h3>Socail Media<br></br>
              <span>Post Dashboard</span>
            </h3>
            <ul>
              <li> <a href="https://github.com/santhu434/React-Social-Posts-Dashboard">
                <GitHub />
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Work