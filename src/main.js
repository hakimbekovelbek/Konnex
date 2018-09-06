import React, { Component } from 'react';
import { store } from './store'
import { Provider } from 'react-redux' 
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login } from './features/login';
import { User } from './features/user/user';
import { NotFound } from './features/notfound/notfound';
import { RegisterComp } from './features/register_company';
import { RegisterUser } from './features/register_user';
import { Links } from './features/links';


class Main extends Component {
  
  render() {
    const { history } = this.props;
    return (
      <Provider store={store}>
      <BrowserRouter history={history}>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/user' component={(User)}>
                <Route path='/links' component={Links}/>
                </Route>
                <Route path='/register' component={RegisterComp}/>
                <Route path='/registeruser' component={RegisterUser} />
                <Route path='*' component={NotFound} />
              </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Main;
