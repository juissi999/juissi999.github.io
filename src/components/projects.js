import React from 'react'

import uc from './img/uc.gif'
import {Text, Ulist, Img} from './elements'

const Projects = () => {

  return (<>
    <Text txt={'This site is made with React.js.'}/>
    <Ulist elements={['EKG, ECG, Eyetracking signal analyses',
                      'some websites on JS, Node.js, D3',
                      'A bunch of Matlab and Python',
                      'A few clips of me in karaoke',
                      'A few parties some people never forget. Some don\'t remember anything or refuse to speak of.']}/>
    </>
  )
}

export default Projects