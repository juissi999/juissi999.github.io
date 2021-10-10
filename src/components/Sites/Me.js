import React from 'react'
import mypic from '../../img/me.JPG'
import { Ulist } from '../UI/elements'

const Me = () => {
  const elementlist = [
    ['Fullstack web-development'],
    ['IoT and signal processing'],
    ['Mathematics'],
    ['Raw problem-solve engineering'],
    ['Scientific research'],
    ['Scripting'],
    ['UI design and programming'],
    ['Game development']
  ]

  const technologies = [
    ['JavaScript (ES5, ES6)'],
    ['TypeScript'],
    ['Vue'],
    ['React.js'],
    ['PWA'],
    ['REST'],
    ['SQL'],
    ['MongoDB'],
    ['Jamstacks, e.g. Vuepress'],
    ['Azure'],
    ['Azure pipelines'],
    ['HTML/CSS/SCSS'],
    ['Python'],
    ['Matlab'],
    ['Ruby'],
    ['C/C++'],
    ['TCP/IP'],
    ['Linux, Windows, Mac']
  ]

  return (
    <>
      <h1>Me</h1>
      <p>A few things about me.</p>
      <img src={mypic} className="img-fluid" />

      <p className="mt-5">
        My name is Jussi. I'm a 36-yo MsC from Finland. I finished my
        engineering studies at 2014 on Tampere University of Technology. I
        started programming already in elementary school over 20 years ago. I'm
        specialized in web software engineering with a twist of networking and
        information security knowledge. Besides that I have good skills in
        electronics and sensor technology and deep mathematical understanding. I
        can design and implement a full flow of data from a sensor to a cloud
        storage and visualize it over internet to a mobile device. I have been
        part of a team using agile methodologies and value teamwork and devops.
        On my freetime I like sports, sauna, cooking and big brother tv-show.
      </p>
      <p>I've done projects in fields of:</p>
      <Ulist elements={elementlist} />
      <p>Experience with technologies such as</p>
      <Ulist elements={technologies} />
      <p>
        Check out some of my projects on the projects page or my{' '}
        <a href={'https://github.com/juissi999/'}>github</a>.
      </p>

      <p>You can contact me through my github page or my instagram!</p>
      <br />
    </>
  )
}

export default Me
