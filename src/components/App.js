import React from 'react'
import {Site} from './elements'
import Linkbar from './Sites/Linkbar'
import Me from './Sites/Me'
import Main from './Sites/Main'
import Projects from './Sites/Projects'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <HashRouter>
      <Container>
        <Row>
          <Col>
            <Linkbar/>
          </Col>
        </Row>
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
      </Container>
    </HashRouter>
  )
}

export default App
