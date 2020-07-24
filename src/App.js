import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Navbar } from './commons/Navbar/Navbar'
import ListPage from './content/list/ListPage'
import ListDetailPage from './content/list/ListDetailPage'
import AddPage from './content/list/AddPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/dragons/:id" component={ListDetailPage} />
        <Route exact path="/dragonsAdd" component={AddPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
