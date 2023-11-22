import React from 'react'
import  ShoppApp from '../../assets/ShoppingApp.jpg'
import  SocialApp from '../../assets/socialApp.jpg'
import  Amazon from '../../assets/Amazon.jpg'
import  Pizza from '../../assets/Pizza.png'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import './projectcontainer.css'




function Projectcontainer() {
    const projects =[
        {
            img:ShoppApp,
            title:'E-commerce Shopping App',
            desc:'React,Redux-Toolkit,Tailwind,',
            link:'https://main--beautiful-pastelito-d8fa2b.netlify.app/'
        },
        {
            img:Amazon,
            title:'Amazon clone Application',
            desc:'React,Redux,RestAPI,Ant Design',
            link:'https://amazonyoutube.vercel.app/'
        },
        {
            img:Pizza,
            title:'Pizza Shop Application',
            desc:'React Hooks and Routing',
            link:'https://illustrious-khapse-51892f.netlify.app/#home'
        },
        {
            img:SocialApp,
            title:'Social Post Dashboard',
            desc:'React,Redux,Redux Saga Middleware,RestAPI',
            link:''
        },
    ]
  return (
    <Element className='projectcontainer' id='project'>
        <h1>PROJECTS</h1>
        <p className='click'>Touch To Open</p>
        <p>Here are some projects which I done for making lives for the people easy</p>
        <div className='projectcontainer_project'>      
    {
     
        projects.map((project,index)=>{
            return (
                <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
            )
            })
    }
        </div>
    </Element>
  )
}

export default Projectcontainer