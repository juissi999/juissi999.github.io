import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const resolve1 = require.context('../../img/', false, /\.(png|jpg|JPG|jpeg)$/)

const Project = ({ projectObj }) => {
  return (
    <Card bg="dark" className="mb-3">
      {typeof projectObj.img !== 'undefined' ? (
        <Card.Img variant="top" src={resolve1('./' + projectObj.img).default} />
      ) : (
        ''
      )}
      <Card.Body className="bg_violet">
        <Card.Title>{projectObj.name}</Card.Title>
        <Card.Text>{projectObj.desc}</Card.Text>
        <div
          className="mt-3"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
        >
          <Button href={projectObj.url} variant="info">
            More
          </Button>
          <div className="category-text">{`#${projectObj.category}`}</div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Project
