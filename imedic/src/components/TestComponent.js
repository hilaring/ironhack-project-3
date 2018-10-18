import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ListPatients from './ListPatients';

const TestComponent = ({ component: Component, setUser, isLogged, ...rest }) => {
  // console.log({ component: Component, user, ...rest })
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogged) {
          return <ListPatients {...props} isLogged={true} setUser={setUser} />
        } else {
          return <Redirect to={{ pathname: '/private', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default TestComponent;