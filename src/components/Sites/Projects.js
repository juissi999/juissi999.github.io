import React from 'react'

import eegtool from '../../img/eegtool_small.png'
import meerkat from '../../img/meerkat.png'
import integra from '../../img/integra.jpg'
import sensibus from '../../img/sensibus.png'
import gym_session from '../../img/gym_session.png'
import homepage from '../../img/homepage.png'
import currency from '../../img/currency.png'
import gazeanalysislib from '../../img/gazeanalysislib.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const project_desc = [
  {name: 'EEGtool',
    img: eegtool, 
    desc: 'An EEG-signal analysis tool with GUI on Matlab. Features such as ' +
      'eeglab integration, video-EEG synchronization, intuitive UI, ' + 
      'scripting support.',
    link: 'https://github.com/infant-cognition-tampere/eegtool'},
  {name: 'meerkat',
    img: meerkat, 
    desc: 'A note and file storing and searching app. Deploys automatically ' +
      'on cloud from github and uses cloud DB\'s. Wait few seconds for VM to ' +
      'boot up if you check it out.',
    link: 'https://meerk4t.herokuapp.com'},
  {name: 'gazeanalysislib',
    img: gazeanalysislib, 
    desc: 'A Matlab library and script that automates many gaze analyses to ' +
      'be performed on computer instead of human based video analysis. ' +
      'source: Widely applicable MATLAB routines for automated analysis of ' +
      'saccadic reaction times (Leppänen et al)',
    link: 'https://github.com/infant-cognition-tampere/gazeanalysislib'},
  {name: 'Story of Integra (+ sequel)',
    img: integra,
    desc: 'A full-scale RPG project as part of the team, on Ruby over RPG maker framework ',
    link: 'https://rpgmaker.net/games/4499/'},
  {name: 'Sensibus.io',
    img: sensibus,
    desc: 'A machine-learning web-service on JS and Node.js ',
    link: 'https://sensibus.io'},
  {name: 'My homepage',
    img: homepage,
    desc: 'This site is my first React.js project. (But not last..)',
    link: 'https://juissi999.github.io'},
  {name: 'Gym session',
    img: gym_session,
    desc: 'A hobby project to quickly create training program on the go, JS ',
    link: 'https://github.com/juissi999/gym_session'},
  {name: 'Currency traffic',
    img: currency,
    desc: 'A website for personal spendings tracking on pure JS and D3.js ',
    link: 'https://github.com/juissi999/currency_traffic'},
  ]

const Project = ({name, img, desc, url}) => {
  
  return (
    <Card bg='dark' style={{ width: '22rem' }} className='mb-3 mr-2 ml-2'>
      <Card.Img variant='top' src={img} />
      <Card.Body className='bg_violet'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {desc}
        </Card.Text>
        <Button href={url} variant='info' className='mt-3'>More</Button>
      </Card.Body>
    </Card>)
}

const Projects = () => {

  setTimeout(()=>{
    const projects = document.getElementsByClassName('project')
    for(let i = 0; i < projects.length; i++) {
      projects[i].classList.add('visible')
      projects[i].setAttribute('style', 'transition-delay:' + (i*0.2).toString() + 's')
    }
  }, 100)

  const mapprojects = () => project_desc.map((el, i) => {
    return (<Project key={i} name={el.name} img={el.img} desc={el.desc} url={el.link}/>)
  })

  return (<>
      <h1>Projects</h1>
      <p>Below you'll find some projects I've been involved into.</p>
      <br/>
      <div className='projects_container'>
        {mapprojects()}
      </div>
    </>
  )
}

export default Projects
