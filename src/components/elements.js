import React from 'react'
import {Link} from 'react-router-dom'

const Head = (props) => {
  return (
    <h1>
    {props.text}
    </h1>
  )
}

const Img = (props) => {
  return (<img src={props.src} className={props.class}/>)
}

const Linkbar = () => {
  const linklist = ['main', 'me', 'projects']

  const links = () => linklist.map((cval, i) => {
      return(<Link key={i} to={cval}>{cval}</Link>)
    }
  )

  return (<div className='linkbar'>
    {links()}
    </div>
  )
}

const Hyperlink = ({to, txt}) => {
  return (<a href={to}>{txt}</a>)
}

const Text = (props) => {
  return (<p>
    {props.txt}
  </p>)
}

const Txtcombined = ({txtlist}) => {
  const catlist = (e) => e.map((el, i) =>{
    // TODO: see if better solution comes than using span
    return (<span key={i}>{el}</span>)
  })

  return (<>{catlist(txtlist)}</>)
}

const Ulist = ({elements}) => {

  const maplist = () => elements.map((el,i) => {
    return (<li key={i}><Txtcombined txtlist={el}/></li>)
  })

  return (<ul>{maplist()}</ul>)
}

const Site = ({Content}) => {
  // not_in_use, for future refactoring to have extra div for site

  return (<>
    <div className='site_data'>
      <Content />
    </div>
  </>)
}

export {Link, Site, Hyperlink, Head, Linkbar, Text, Txtcombined, Ulist, Img}