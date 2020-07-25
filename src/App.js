import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './commons/Navbar/Navbar'
import ListPage from './content/list/ListPage'
import ListDetailPage from './content/list/ListDetailPage'
import AddPage from './content/list/AddPage'
import LoginPage from './content/login/LoginPage'
import { PrivateRoute } from './commons/auth'

const App = () => {
  return (
    <Router>
      {localStorage.getItem('username') && (
        <Navbar />
      )}
      <Switch>
        <PrivateRoute exact path="/" component={ListPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/dragons/:id" component={ListDetailPage} />
        <PrivateRoute exact path="/dragonsAdd" component={AddPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
