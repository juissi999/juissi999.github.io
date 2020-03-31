import React from 'react'

import {Text, Txtcombined, Hyperlink, Img, Head} from './elements'
import eegtool from '../img/eegtool_small.png'
import integra from '../img/integra.jpg'
import sensibus from '../img/sensibus.png'
import gym_session from '../img/gym_session.png'
import homepage from '../img/homepage.png'
import currency from '../img/currency.png'
import gazeanalysislib from '../img/gazeanalysislib.png'

const project_desc = [{name:'EEGtool', img:eegtool, 
                       desc:['An EEG-signal analysis tool with GUI on Matlab ',
                             <Hyperlink to={'https://github.com/infant-cognition-tampere/eegtool'} >link</Hyperlink>]},
                      {name:'gazeanalysislib', img:gazeanalysislib, 
                       desc:['A Matlab library and script that automates many gaze analyses to be performed on computer instead of human based video analysis ',
                             <Hyperlink to={'https://github.com/infant-cognition-tampere/gazeanalysislib'}>link</Hyperlink>,
                             ' source: Widely applicable MATLAB routines for automated analysis of saccadic reaction times (Leppänen et al)']},
                      {name:'Story of Integra (+ sequel)', img:integra,
                      desc:['A full-scale RPG project as part of the team, on Ruby over RPG maker framework ',
                            <Hyperlink to={'https://rpgmaker.net/games/4499/'} >link</Hyperlink>]},
                      {name:'Sensibus.io', img:sensibus,
                      desc:['A machine-learning web-service on JS and Node.js ',
                            <Hyperlink to={'https://sensibus.io'} >link</Hyperlink>]},
                      {name:'Gym session', img:gym_session,
                      desc:['A hobby project to quickly create training program on the go, JS ',
                            <Hyperlink to={'https://github.com/juissi999/gym_session'} >link</Hyperlink>]},
                      {name:'My homepage', img:homepage,
                      desc:['This site is my first React.js project']},
                      {name:'Currency traffic', img:currency,
                      desc:['A website for personal spendings tracking on JS and D3.js ',
                            <Hyperlink to={'https://github.com/juissi999/currency_traffic'} >link</Hyperlink>]},
                      ]

const Project = ({name, img, desc}) => {
  
  return (<div className='project'>
    <h3>{name}</h3>
    <Img src={img} className={'block_element'}/>
    <p><Txtcombined txtlist={desc} /></p>
  </div>)
}

const Projects = () => {

  setTimeout(()=>{
    const projects = document.getElementsByClassName('project')
    for(let i = 0; i < projects.length; i++) {
      projects[i].classList.add('visible')
      projects[i].setAttribute('style', 'transition-delay:' + (i*0.2).toString() + 's')
    }
  }, 100)

  const mapprojects = () => project_desc.map((el,i) => {
    return (<Project key={i} name={el.name} img={el.img} desc={el.desc}/>)
  })

  return (<>
      <Head>Projects</Head>
      <Text>Some examples of the projects I\'ve been involved to in the last years:</Text>
      <br/>
      <div className='projects_container'>
        {mapprojects()}
      </div>
    </>
  )
}

export default Projects
