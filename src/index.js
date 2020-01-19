import React, {useState} from "react";
import ReactDOM from "react-dom";

const Head = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Link = ({ind, txt, set}) => {
  const styleobj = {
    display:'inline-block',
    margin:'5px'
  }

  return (<div style={styleobj}>
            <a href={'#' + txt} onClick={()=>set(ind)}>{txt}</a>
          </div>)
}

const Linkbar = ({set}) => {
  return (<div>
    <Link ind={0} txt='me' set={set} />
    <Link ind={1} txt='my projects' set={set}/>
    <Link ind={2} txt='my adventures' set={set}/>
    </div>
  )
}

const Text = (props) => {
  return (<div>
    {props.txt}
  </div>)
}

const App = () => {

  const [site, setSite] = useState(0)
  const txt = ['My name is Jussi.',
  'This site is made with react.',
  'I traveled to 3 continents on planet earth.']

  return (<>
    <Head text='Jussis homepage'/>
    <Linkbar set={setSite}/>
    <Text txt={txt[site]}/>
  </>)
}

ReactDOM.render(<App />, document.querySelector("#root"))