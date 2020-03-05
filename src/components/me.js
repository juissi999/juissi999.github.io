import React from 'react'

import smallme from './img/smallme.png'
import {Text, Ulist, Img, Head} from './elements'


const Me = () => {

  const elementlist = [['Scripting'], ['UI design and programming'], ['Mathematics'], ['IoT and signal processing'], ['Fullstack web-development'], ['Game development']]

  return (<>
    <Head text={'Me'}/>
    <div class='site_data'>
    <Text txt={'A few things about me.'}/>
    <br/>
    <Img src={smallme} class={'block_element'}/>
    <Text txt={'My name is Jussi. I\'m a 34-yo MsC from Finland. ' }/>
    <Text txt={'I\'ve done projects in fields of:' }/>
    <Ulist elements={elementlist}/>
    <Text txt={'I have experience in programming e.g. with Python, Matlab, JavaScript, HTML/CSS, Ruby, C and C++.' }/>
    <Text txt={'Check out some of my projects on the projects page or in my github.'}/>
    <br/>
    <Text txt={'I am looking for a programming or other engineering job in Finland.'}/>
    <Text txt={'You can contact me through my github page!'}/>
    </div>
    </>
  )
}

export default Me