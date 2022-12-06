import React from 'react'
import mypic from '../../img/me.jpeg'
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

  return (
    <>
      <h1>Me</h1>
      <p>A few things about me.</p>
      <img src={mypic} className="myphoto img-fluid" />

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
        On my freetime I like sauna and swimming.
      </p>
      <p>I've done projects in fields of:</p>
      <Ulist elements={elementlist} />
      <p>
        Check out some of my projects on the projects page or my{' '}
        <a href={'https://github.com/juissi999/'}>github</a>. You can contact me
        via github or instagram.
      </p>
      <br />
    </>
  )
}

export default Me
