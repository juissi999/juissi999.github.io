import React from 'react'

import smallme from '../../img/smallme.png'
import {Text, Txtcombined, Hyperlink, Ulist, Img} from '../elements'


const Me = () => {

  const elementlist = [['Scripting'], ['UI design and programming'], ['Mathematics'], ['IoT and signal processing'], ['Fullstack web-development'], ['Game development']]

  return (<>
    <h1>Me</h1>
    <p>A few things about me.</p>
    <br/>
    <Img src={smallme} class={'block_element'}/>
    <p>My name is Jussi. I'm a 34-yo MsC from Finland.</p>
    <p>I've done projects in fields of:</p>
    <Ulist elements={elementlist}/>
    <p>I have experience in programming e.g. with Python, Matlab, JavaScript, HTML/CSS, Ruby, C and C++.</p>
    <p><Txtcombined txtlist={['Check out some of my projects on the projects page or my ', <Hyperlink to={'https://github.com/juissi999/'}>github</Hyperlink>, '.']}/></p>
    <br/>
    <p>I'm looking for a programming job in Finland, preferably as an Entry-level Fullstack Developer.</p>
    <p>I'm currently learning modern fullstack techniques such as React and Node.js.</p>
    <p>Contact me through my github page!</p>
    </>
  )
}

export default Me
