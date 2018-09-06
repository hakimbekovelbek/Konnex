import React from 'react'
import {HeaderWelcome} from '../../ui/molecules/login'

// >> Welcoming after succesfull Log in
export class User extends React.Component{
    render(){
      return  <HeaderWelcome>Welcome, user!</HeaderWelcome>
    }
  }