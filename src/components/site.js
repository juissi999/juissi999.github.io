import React from "react"
import css from "./../style.css"

const Head = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Link = ({ind, txt, setsite}) => {

  return (<div className={'linkbarlink'}>
            <a href={'#' + txt} onClick={()=>setsite(ind)}>{txt}</a>
          </div>)
}

const Linkbar = ({setsite}) => {
  const linklist = ['me', 'my projects']

  const links = () => linklist.map(
    (cval, i) =><Link key={i} ind={i} txt={cval} setsite={setsite} />
  )
  
  return (<div>
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

const Content = ({site}) => {
  const txt = ['My name is Jussi.',
  'This site is made with react. I can\'t do partials well yet so that\'s it.',
  'I traveled to 3 continents on planet earth.']

  if (site == 0) {
    return (<>
      <Text txt={'My name is Jussi. I\'m a MsC from Finland. Currently I\'m learning web development.'}/>
      <Text txt={'Some things about me:'}/>
      <Ulist elements = {['I like ramen noodles', 'DMG on CS:GO', 'I visited 3 continents']} />
      </>
    )  
  } else if (site == 1) {
    return (<>
      <Text txt={'This site is made with React.js.'}/>
      <Text txt={'I also know a bit about memes, the 90\'s and old freeride movies.'}/>
      </>
    )  
  }
}

export {Link, Head, Linkbar, Text, Content}