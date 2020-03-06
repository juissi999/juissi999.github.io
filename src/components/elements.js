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
    // span-> React.Fragment to remove unnecessary DOM-elements
    return (<React.Fragment key={i}>{el}</React.Fragment>)
  })

  return (<>{catlist(txtlist)}</>)
}

const Li = ({txtlist}) => {
  return (<li><Txtcombined txtlist={txtlist}/></li>)
}

const Ulist = ({elements}) => {

  const maplist = () => elements.map((el,i) => {
    return (<Li key={i} txtlist={el}/>)
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