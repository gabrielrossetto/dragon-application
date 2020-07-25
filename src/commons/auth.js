import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
            localStorage.getItem('username')
                  ? <Component {...props} />
                  : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />
)

export const isUserValid = (username, password) => {
      const user = 'test';
      const pwd = 'test';

      return user === username && pwd === password;
}
