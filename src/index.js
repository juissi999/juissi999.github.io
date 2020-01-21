import React, {useState} from "react"
import ReactDOM from "react-dom"
import {Linkbar, Head, Text, Content} from './components/site'
import css from "./style.css"

const App = () => {

  const [site, setSite] = useState(0)
  
  //console.log(window.location.hash)

  return (<>
    <Head text={'Jussi\'s homepage'}/>
    <Linkbar setsite={setSite}/>
    <Content site={site}/>
  </>)
}

ReactDOM.render(<App />, document.querySelector("#root"))