import React from 'react'

import smallme from './img/smallme.png'
import {Text, Txtcombined, Hyperlink, Ulist, Img, Head} from './elements'


const Me = () => {

  const elementlist = [['Scripting'], ['UI design and programming'], ['Mathematics'], ['IoT and signal processing'], ['Fullstack web-development'], ['Game development']]

  return (<>
    <Head text={'Me'}/>
    <Text txt={'A few things about me.'}/>
    <br/>
    <Img src={smallme} class={'block_element'}/>
    <Text txt={'My name is Jussi. I\'m a 34-yo MsC from Finland. ' }/>
    <Text txt={'I\'ve done projects in fields of:' }/>
    <Ulist elements={elementlist}/>
    <Text txt={'I have experience in programming e.g. with Python, Matlab, JavaScript, HTML/CSS, Ruby, C and C++.' }/>
    <p><Txtcombined txtlist={['Check out some of my projects on the projects page or my ', <Hyperlink txt={'github'} to={'https://github.com/juissi999/'} />, '.']}/></p>
    <br/>
    <Text txt={'I\'m looking for a programming job in Finland, preferably as an Entry-level Fullstack Developer.'}/>
    <Text txt={'I\'m currently learning modern fullstack techniques such as React and Node.js.'}/>
    <Text txt={'Contact me through my github page!'}/>
    </>
  )
}

export default Me