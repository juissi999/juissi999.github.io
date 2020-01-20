import React from "react"

const Head = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Link = ({ind, txt, setsite}) => {
  const styleobj = {
    display:'inline-block',
    margin:'5px'
  }

  return (<div style={styleobj}>
            <a href={'#' + txt} onClick={()=>setsite(ind)}>{txt}</a>
          </div>)
}

const Linkbar = ({setsite}) => {
  const linklist = ['me', 'my projects', 'my adventures']

  const links = () => linklist.map(
    (cval, i) =><Link key={i} ind={i} txt={cval} setsite={setsite} />
  )
  
  return (<div>
    {links()}
    </div>
  )
}

const Text = (props) => {
  return (<div>
    {props.txt}
  </div>)
}

export {Link, Head, Linkbar, Text}