import React from 'react'
import {Text, Hyperlink, Ulist, Img, Head} from './elements'

import eegtool from './img/eegtool_small.png'
import integra from './img/integra.jpg'

const project_desc = [{name:'EEGtool', img:eegtool, desc:'An EEG-signal analysis tool with GUI on Matlab'},
                      {name:'Story of Integra (+ sequel)', img:integra, desc:'A full-scale JRPG project, programming on Ruby'}]

const Project = ({name, img, desc}) => {
  return (<div class="project">
    <h3>{name}</h3>
    <Img src={img} class={'block_element'}/>
    <Text txt={desc} />
  </div>)
}

const Projects = () => {

  const elementlist = [['I\'ve worked more than 5 years on a international psychology research group'],
  ['Many years of working experience with Matlab and Python'],
  ['Worked with various biosignals sensors such as EEG an Eyetracking'], 
  ['I used Python to record and data from multiple different sensors on an IoT fashion'],
  ['Signal processing involving e.g. FFT, wavelet, filtering and image-processing'],
  ['Published scientific articles'],
  ['I\'ve created websites on JS, Node.js, D3 and this site with React.js'],
  ['A bit of game development (e.g. ', <Hyperlink txt={'Story of Integra'} to={'https://rpgmaker.net/games/4499/'} />,
   ', ', <Hyperlink txt={'The Godslayer'} to={'https://rpgmaker.net/games/5291/'} />, ')'], 
  ['Many smaller projects such as community web-sites, LAN-networks, etc.']]

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