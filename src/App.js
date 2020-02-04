import React from 'react';
import { Router,Route ,BrowserRouter,Switch} from 'react-router-dom';
import Layout from './components/Layout';
import {Home} from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { LoginPage} from './LoginPage/LoginPage';
import Password  from './Password/Password';
import {history} from './history';
import {PrivateRoute} from './components/PrivateRoute';

// export default () => (
//   <Router history={history}>
//   <Layout>
//         <Route exact path='/' component={LoginPage} />
//         <PrivateRoute path='/Password' component={Password} />
//          <Route path='/Home' component={Home}></Route>
        
//   </Layout>
//   </Router>
// );
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <PrivateRoute  path='/Password' component={Password} />
          <PrivateRoute  path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}