import React from 'react'
import Project from '../UI/Project.js'
import CardColumns from 'react-bootstrap/CardColumns'

import * as data from '../../projects.json'
const project_desc = data.projects

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
      return <Project key={i} projectObj={el} />
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
