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

const Ulist = ({elements}) => {

  const listelement = (e) => e.map((el, i) =>{
    return el
  })

  const maplist = () => elements.map((el,i) => {
    return (<li key={i}>{listelement(el)}</li>)
  })

  return (<ul>{maplist()}</ul>)
}


export {Link, Hyperlink, Head, Linkbar, Text, Ulist, Img}