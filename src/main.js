import React, { Component } from 'react';
import { store } from './store'
import { Provider } from 'react-redux' 
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login } from './features/login';
import {User} from './ui/molecules/login';
import { RegisterComp } from './features/register_company/register';
import { RegisterUser } from './features/register_user/registeruser';



class Main extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/user' component={User}/>
                <Route path='/register' component={RegisterComp}/>
                <Route path='/registeruser' component={RegisterUser} />
              </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Main;
