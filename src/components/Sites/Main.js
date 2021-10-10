import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
  return (
    <>
      <h1>Jussi's homepage</h1>
      <p className="my-5">
        <i>
          "Web services should be simple, pleasant to use and easy to develop,
          maintain and deploy."
        </i>
      </p>

      <a href="https://instagram.com/verkkarimies">
        <FontAwesomeIcon icon={faInstagram} size="3x" className="mr-3" />
      </a>
      <a href={'https://github.com/juissi999/'}>
        <FontAwesomeIcon icon={faGithub} size="3x" className="mr-3" />
      </a>
    </>
  )
}

export default Main
