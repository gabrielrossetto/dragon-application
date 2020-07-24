import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './commons/Navbar'
import List from './content/list/List'
import ListDetail from './content/list/ListDetail'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/dragons/:id" component={ListDetail} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
