import React from 'react'
import  ShoppApp from '../../assets/ShoppingApp.jpg'
import  SocialApp from '../../assets/socialApp.jpg'
import  Weather from '../../assets/weather.png'
import  todo from '../../assets/todo.jpg'
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
            img:SocialApp,
            title:'Social Post Dashboard',
            desc:'React,Redux,Redux Saga Middleware,RestAPI',
            link:''
        },
        {
            img:ShoppApp,
            title:'Dasdboad',
            desc:'React,Redux',
            link:''
        },
        {
            img:Weather,
            title:'Weather',
            desc:'React and Hooks',
            link:''
        },
        {
            img:todo,
            title:'Grocery Todolist App',
            desc:'React,Redux,MockAPI',
            link:''
        },
        {
            img:todo,
            title:'Calculator',
            desc:'React,Redux',
            link:''
        },

    ]
  return (
    <Element className='projectcontainer' id='project'>
        <h1>Projects</h1>
        <p>Here are some projects which I done for making lives of people easy</p>
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