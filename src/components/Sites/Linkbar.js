import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Linkbar = ({activeKey, linklist}) => {

  const links = () => linklist.map((cval, i) => {
     return (<Nav.Link key={i} href={'#' + cval}>{cval}</Nav.Link>)
    }
  )
  //bg='dark'

  return (
    <Navbar className='bg_blue' variant='dark'>
      <Nav className='ml-auto' activeKey={activeKey}>
        {links()}
      </Nav>
    </Navbar>
  )
}

export default Linkbar
