import React from 'react'
import smallme from '../../img/smallme.png'
import { Ulist } from '../elements'

const Me = () => {
  const elementlist = [
    ['Mathematics'],
    ['Raw problem-solve engineering'],
    ['Scientific research'],
    ['Scripting'],
    ['UI design and programming'],
    ['IoT and signal processing'],
    ['Fullstack web-development'],
    ['Game development']
  ]

  return (
    <>
      <h1>Me</h1>
      <p>A few things about me.</p>
      <img src={smallme} className='img-fluid' />
      <br />
      <br />
      <p>My name is Jussi. I'm a 34-yo MsC from Finland.</p>
      <p>I've done projects in fields of:</p>
      <Ulist elements={elementlist} />
      <p>
        I have experience in programming e.g. with Python, Matlab, JavaScript,
        HTML/CSS, Ruby, C and C++.
      </p>
      <p>
        Check out some of my projects on the projects page or my{' '}
        <a href={'https://github.com/juissi999/'}>github</a>.
      </p>
      <p>
        My philosophy in building web services is that services should be
        simple, pleasant to use and easy to develop, maintain and deploy.
      </p>
      <p>You can contact me through my github page!</p>
      <br />
    </>
  )
}

export default Me
