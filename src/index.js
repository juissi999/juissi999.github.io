import React, {useState} from "react"
import ReactDOM from "react-dom"
import {Link, Linkbar, Head, Text} from './components/site'

const App = () => {

  const [site, setSite] = useState(0)
  const txt = ['My name is Jussi.',
  'This site is made with react. I can\'t do partials well yet so that\'s it.',
  'I traveled to 3 continents on planet earth.']

  return (<>
    <Head text={'Jussi\'s homepage'}/>
    <Linkbar setsite={setSite}/>
    <Text txt={txt[site]}/>
  </>)
}

ReactDOM.render(<App />, document.querySelector("#root"))