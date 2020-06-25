import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'

const resolve1 = require.context('../../img/', false, /\.(png|jpg|JPG|jpeg)$/)
import * as data from '../../projects.json'
const project_desc = data.projects

const Project = ({ name, img, desc, url }) => {
  return (
    <Card bg='dark' className='mb-3'>
      {typeof img !== 'undefined' ? (
        <Card.Img variant='top' src={resolve1('./' + img).default} />
      ) : (
        ''
      )}
      <Card.Body className='bg_violet'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button href={url} variant='info' className='mt-3'>
          More
        </Button>
      </Card.Body>
    </Card>
  )
}

const Projects = () => {
  const mapprojects = () => {
    // shuffle array
    const origProjects = project_desc.concat()
    const projectsShuffled = []
    while (origProjects.length > 0) {
      // empty old array and fill new array with elements from random location
      // in old array
      const indice = Math.floor(Math.random() * origProjects.length)
      projectsShuffled.push(origProjects.splice(indice, 1)[0])
    }

    // create array of Project elements and return it to DOM
    return projectsShuffled.map((el, i) => {
      return (
        <Project
          key={i}
          name={el.name}
          img={el.img}
          desc={el.desc}
          url={el.link}
        />
      )
    })
  }

  return (
    <>
      <h1>Projects</h1>
      <p>Below you'll find some projects I've been involved into.</p>
      <br />
      <CardColumns>{mapprojects()}</CardColumns>
    </>
  )
}

export default Projects
