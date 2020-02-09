import React from 'react'

import uc from './img/uc.gif'
import {Text, Ulist, Img, Head} from './elements'

const Projects = () => {

  const elementlist = ['I\'ve worked more than 5 years on a international psychology research group',
  'I have a lot of working experience in Matlab and Python',
  'I have worked with various biosignals sensors such as EEG an Eyetracking',
  'I used python to record and data from multiple different sensors on an IoT fashion',
  'I have done signal analyses involving e.g. FFT, wavelet, FIR, image-processing and developed own analyses',
  'I\'ve been writing and publishing scientific articles on internation journals',
  'I\'ve created websites on JS, Node.js, D3 and this site with React.js',
  'I\'ve been part to many smaller hobby projects such as community web-sites, game-development, LAN-networks, etc.']

  return (<>
  <Head text={'Projects'}/>
    <Text txt={'Here are some of the projects I\'ve been involved to in the last years:'}/>
    <Ulist elements={elementlist}/>
    </>
  )
}

export default Projects