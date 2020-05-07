import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Linkbar = () => {
  const linklist = ['main', 'me', 'projects']

  const links = () => linklist.map((cval, i) => {
     return (<Nav.Link key={i} href={'#'+cval}>{cval}</Nav.Link>)
    }
  )

  //bg='dark'

  return (
    <Navbar className='bg_blue' variant='dark'>
      <Nav className='ml-auto'>
        {links()}
      </Nav>
    </Navbar>
  )
}

export default Linkbar
