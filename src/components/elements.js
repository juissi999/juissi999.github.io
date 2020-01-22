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

const Text = (props) => {
  return (<p>
    {props.txt}
  </p>)
}

const Ulist = ({elements}) => {

  const maplist = () => elements.map((el,i) => {
    return (<li key={i}>{el}</li>)
  })

  return (<ul>{maplist()}</ul>)
}


export {Link, Head, Linkbar, Text, Ulist, Img}