import React from 'react'
import StoryBlock from './Block'

const StoryRow = ({ children }) => {
  const mapRow = () => {
    let renderList = []
    // check if children is an array or just a single element
    // if it's not an array, make it one

    if (Array.isArray(children)) {
      renderList = children.concat()
    } else {
      // slice so that we get copy and not reference
      renderList = [children.slice(0)]
    }

    return renderList.map((c, i) => {
      return <StoryBlock key={i}>{c}</StoryBlock>
    })
  }

  return <div className="storyRow">{mapRow()}</div>
}

export default StoryRow
