import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const resolve1 = require.context('../../img/', false, /\.(png|jpg|JPG|jpeg)$/)
import * as data from '../../projects.json'
const project_desc = data.projects

const Project = ({ name, img, desc, url }) => {
  return (
    <Card bg='dark' style={{ width: '20rem' }} className='mb-3 mr-2 ml-2'>
      <Card.Img variant='top' src={resolve1('./' + img).default} />
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
  setTimeout(() => {
    const projects = document.getElementsByClassName('project')
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.add('visible')
      projects[i].setAttribute(
        'style',
        'transition-delay:' + (i * 0.2).toString() + 's'
      )
    }
  }, 100)

  const mapprojects = () =>
    project_desc.map((el, i) => {
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

  return (
    <>
      <h1>Projects</h1>
      <p>Below you'll find some projects I've been involved into.</p>
      <br />
      <Container>
        <Row>{mapprojects()}</Row>
      </Container>
    </>
  )
}

export default Projects
