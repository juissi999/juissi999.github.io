import React from 'react'

import smallme from '../../img/smallme.png'
import {Text, Txtcombined, Hyperlink, Ulist, Img, Head} from '../elements'


const Me = () => {

  const elementlist = [['Scripting'], ['UI design and programming'], ['Mathematics'], ['IoT and signal processing'], ['Fullstack web-development'], ['Game development']]

  return (<>
    <Head>Me</Head>
    <Text>A few things about me.</Text>
    <br/>
    <Img src={smallme} class={'block_element'}/>
    <Text>My name is Jussi. I'm a 34-yo MsC from Finland.</Text>
    <Text>I've done projects in fields of:</Text>
    <Ulist elements={elementlist}/>
    <Text>I have experience in programming e.g. with Python, Matlab, JavaScript, HTML/CSS, Ruby, C and C++.</Text>
    <p><Txtcombined txtlist={['Check out some of my projects on the projects page or my ', <Hyperlink to={'https://github.com/juissi999/'}>github</Hyperlink>, '.']}/></p>
    <br/>
    <Text>I'm looking for a programming job in Finland, preferably as an Entry-level Fullstack Developer.</Text>
    <Text>I'm currently learning modern fullstack techniques such as React and Node.js.</Text>
    <Text>Contact me through my github page!</Text>
    </>
  )
}

export default Me
