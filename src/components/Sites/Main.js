import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <h1>Jussi's homepage</h1>
      <p>
        Welcome to my site. Click a link on the top right corner to proceed.
      </p>
      <p>
        Currently looking for a job. See more on page <Link to={'me'}>me</Link>!
      </p>
    </>
  )
}

export default Main
