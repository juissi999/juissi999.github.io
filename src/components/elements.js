import React from 'react'

const Txtcombined = ({ txtlist }) => {
  const catlist = e =>
    e.map((el, i) => {
      // span-> React.Fragment to remove unnecessary DOM-elements
      return <React.Fragment key={i}>{el}</React.Fragment>
    })

  return <>{catlist(txtlist)}</>
}

const Li = ({ txtlist }) => {
  return (
    <li>
      <Txtcombined txtlist={txtlist} />
    </li>
  )
}

const Ulist = ({ elements }) => {
  const maplist = () =>
    elements.map((el, i) => {
      return <Li key={i} txtlist={el} />
    })

  return <ul>{maplist()}</ul>
}

const Site = ({ Content }) => {
  // not_in_use, for future refactoring to have extra div for site

  return (
    <div className='site_data'>
      <Content />
    </div>
  )
}

export { Site, Txtcombined, Ulist }
