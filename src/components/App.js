import React from 'react'
import {Linkbar, Site} from './elements'
import Me from './Sites/Me'
import Main from './Sites/Main'
import Projects from './Sites/Projects'
import {HashRouter, Switch, Route} from 'react-router-dom'

const App = () => {

  return (
    <HashRouter>
      <Linkbar/>
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
    </HashRouter>
  )
}

export default App
