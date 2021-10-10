import React from 'react'
import { Site } from './UI/elements'
import Linkbar from './Sites/Linkbar'
import Me from './Sites/Me'
import Main from './Sites/Main'
import Projects from './Sites/Projects'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const linklist = ['main', 'me', 'projects']

  return (
    <HashRouter>
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/me">
                <Linkbar linklist={linklist} activeKey={'#me'} />
                <Site Content={Me} />
              </Route>
              <Route path="/projects">
                <Linkbar linklist={linklist} activeKey={'#projects'} />
                <Site Content={Projects} />
              </Route>
              <Route path="/">
                <Linkbar linklist={linklist} activeKey={'#main'} />
                <Site Content={Main} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  )
}

export default App
