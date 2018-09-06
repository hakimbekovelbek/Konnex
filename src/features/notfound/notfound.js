import React from 'react'
import { Link } from 'react-router-dom'
import {NOTFOUND, Back} from '../../ui/molecules/login'




export class NotFound extends React.Component{
    render(){
      return  (<React.Fragment>
        <NOTFOUND> 404 NOT FOUND.</NOTFOUND>
        <Back> <Link to='/'> Back to Main Page </Link> </Back>
        </React.Fragment>
      )
    }
  }