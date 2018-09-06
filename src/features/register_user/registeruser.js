import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {RegisterUserUI}  from '../../ui/molecules/register-user'
import { postRegisterUser } from './action'
import PropTypes from 'prop-types'
import { RegUI } from '../home';


class RegisterUserRaw extends Component {


    static propTypes = {
      isFetching: PropTypes.bool,
      isAuth: PropTypes.bool,
    }
  
    state = {
      // company: this.state.name,
      first_name: '',
      last_name: '',
      mobile: '',
      username: '',
      password: '',
      passconf: '',
    }
    
    componentWillReceiveProps(nextProps){
      const { history } = this.props;
      nextProps.isAuth && history.push(`/user`)
    }
    
    handleChangeFirstName = (e) => {
      this.setState({
      first_name: e.target.value
      })

    }
    
    handleChangeLastName = (e) => {
      this.setState({
      last_name: e.target.value
      })
    }
    
    handleChangeMobile = (e) => {
      this.setState({
      mobile: e.target.value
      })
    }
    
    handleChangeEmail = (e) => {
      this.setState({
      username: e.target.value
      })
    }
    
    handleChangePassword = (e) => {
      this.setState({
      password: e.target.value
      })
    }
    
    handleChangePasswordConf = (e) => {
      this.setState({
      passconf: e.target.value
      })
    }
    
    handleClick = (e) => {
      e.preventDefault();
      this.props.postRegisterUser({ ...this.state })
    }

    render() {
    
      return (
        <React.Fragment>
          <RegUI/>
          <RegisterUserUI 
            onClick={this.handleClick}
            onChangeName={this.handleChangeFirstName}
            onChangeSurname={this.handleChangeLastName}
            onChangeMobile={this.handleChangeMobile}
            onChangeEmail={this.handleChangeEmail}
            onChangePassowrd={this.handleChangePassword}
            onChangePassowrdConf={this.handleChangePasswordConf}
            onHandleSubmit={this.handleSubmit}
            >
        </RegisterUserUI>
          </React.Fragment>
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
      isFetching: state.registration.isFetching,
      isAuth: state.registration.isAuth,
    }
  }
  
  export const RegisterUser = withRouter(connect(mapStateToProps, { postRegisterUser })(RegisterUserRaw))