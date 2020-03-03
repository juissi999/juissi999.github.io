import React from 'react'
import {Text, Hyperlink, Ulist, Img, Head} from './elements'

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

  return (<>
  <Head text={'Projects'}/>
    <Text txt={'Here are some of the projects I\'ve been involved to in the last years:'}/>
    <Ulist elements={elementlist}/>
    </>
  )
}

export default Projects