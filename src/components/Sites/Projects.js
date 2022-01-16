import React, { useState } from 'react'
import Project from '../UI/Project.js'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'

import * as data from '../../projects.json'
const project_desc = data.projects

const Projects = () => {
  const [includedCategories, setIncludedCategories] = useState([])

  const mapprojects = () => {
    // shuffle array
    const origProjects = project_desc.concat()
    let projectsShuffled = []
    while (origProjects.length > 0) {
      // empty old array and fill new array with elements from random location
      // in old array
      const indice = Math.floor(Math.random() * origProjects.length)
      projectsShuffled.push(origProjects.splice(indice, 1)[0])
    }

    if (includedCategories.length > 0) {
      projectsShuffled = projectsShuffled.filter((project) =>
        includedCategories.find((ic) => project.category === ic)
      )
    }

    // create array of Project elements and return it to DOM
    return projectsShuffled.map((el, i) => {
      return <Project key={i} projectObj={el} />
    })
  }

  const onClickCategory = (category) => {
    if (includedCategories.find((ic) => ic === category)) {
      setIncludedCategories(
        includedCategories.filter((cat) => cat !== category)
      )
    } else {
      setIncludedCategories(includedCategories.concat(category))
    }
  }

  const renderCategories = () => {
    const categories = project_desc.map((pd) => pd.category)
    const uniqCategories = [...new Set(categories)]
    return uniqCategories.map((category) => (
      <Button
        key={category}
        className="mx-1"
        size="sm"
        variant={
          includedCategories.find((uc) => uc === category)
            ? 'secondary'
            : 'outline-secondary'
        }
        onClick={() => onClickCategory(category)}
      >
        {'#' + category}
      </Button>
    ))
  }

  return (
    <>
      <h1>Projects</h1>
      <p>Below you'll find some projects I've been involved into.</p>
      {renderCategories()}
      <br />
      <br />
      <CardColumns>{mapprojects()}</CardColumns>
    </>
  )
}

export default Projects
