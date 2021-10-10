import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const resolve1 = require.context('../../img/', false, /\.(png|jpg|JPG|jpeg)$/)

const Project = ({ name, img, desc, url }) => {
  return (
    <Card bg="dark" className="mb-3">
      {typeof img !== 'undefined' ? (
        <Card.Img variant="top" src={resolve1('./' + img).default} />
      ) : (
        ''
      )}
      <Card.Body className="bg_violet">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button href={url} variant="info" className="mt-3">
          More
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Project
