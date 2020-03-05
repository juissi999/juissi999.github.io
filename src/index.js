import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Linkbar, Site} from './components/elements'
import Me from './components/me'
import Main from './components/main'
import Projects from './components/projects'
import  './style.css'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {

  const [site, setSite] = useState(0)
  
  return (<>
    <Router>
      <Linkbar setsite={setSite}/>
      <Switch>
        <Route path='/me'>
          <Site Content={Me}/>
        </Route>
        <Route path='/projects' >
          <Site Content={Projects}/>
        </Route>
        <Route path='/'>
          <Site Content={Main}/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))