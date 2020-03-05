import React from 'react'
import {Text, Txtcombined, Hyperlink, Ulist, Img, Head} from './elements'

import eegtool from './img/eegtool_small.png'
import integra from './img/integra.jpg'
import sensibus from './img/sensibus.png'
import gym_session from './img/gym_session.png'
import homepage from './img/homepage.png'

const project_desc = [{name:'EEGtool', img:eegtool, 
                       desc:['An EEG-signal analysis tool with GUI on Matlab ',
                             <Hyperlink txt={'link'} to={'https://github.com/infant-cognition-tampere/eegtool'} />]},
                      {name:'Story of Integra (+ sequel)', img:integra,
                      desc:['A full-scale RPG project as part of the team, on Ruby ',
                            <Hyperlink txt={'link'} to={'https://rpgmaker.net/games/4499/'} />]},
                      {name:'Sensibus.io', img:sensibus,
                      desc:['A machine-learning web-service on JS and Node.js ',
                            <Hyperlink txt={'link'} to={'https://sensibus.io'} />]},
                      {name:'Gym session', img:gym_session,
                      desc:['A hobby project to quickly create training program on the go, JS ',
                            <Hyperlink txt={'link'} to={'https://github.com/juissi999/gym_session'} />]},
                      {name:'My homepage', img:homepage,
                      desc:['This site is my first React.js project']}
                      ]

const Project = ({name, img, desc}) => {
  
  return (<div class='project'>
    <h3>{name}</h3>
    <Img src={img} class={'block_element'}/>
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
    return (<Project name={el.name} img={el.img} desc={el.desc}/>)
  })

  return (<>
      <Head text={'Projects'}/>
      <Text txt={'Some examples of the projects I\'ve been involved to in the last years:'}/>
      <br/>
      {mapprojects()}
    </>
  )
}

export default Projects