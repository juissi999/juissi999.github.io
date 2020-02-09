import React, {useState} from "react"
import ReactDOM from "react-dom"
import {Linkbar, Head} from './components/elements'
import Me from './components/me'
import Main from './components/main'
import Projects from './components/projects'
import  "./style.css"
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {

  const [site, setSite] = useState(0)
  
  return (<>
    <Router>
      <Linkbar setsite={setSite}/>
      <Switch>
        <Route path='/me' component={Me}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/' component={Main}/>
      </Switch>
    </Router>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))