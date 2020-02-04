import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// //const isloggedin=!!localStorage.getItem("user")   
// //console.log(isloggedin);

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//       //  isloggedin 
//      console.log( localStorage.getItem('token'))
//         ? (<Component {...props} />)
//             :(<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
//     )} />
// )
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem("user");
  console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <React.Fragment>
            
            <Component {...props} />
          
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
