import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Home } from '../home'
import { postLogin } from './action'
import LoginUI  from '../../ui/molecules/login'
import PropTypes from 'prop-types'
import {ROUTING} from './action.js'


class LoginRaw extends Component {

  static propTypes = {
    isFetching: PropTypes.bool,
    isAuth: PropTypes.bool,
  }

  state = {
    username: '',
    password: ''
  }
  // componentWillReceiveProps(nextProps){
  //   const { history } = this.props;
  //   nextProps.isAuth && history.push(`/user`) ? d : d
  // }

  componentWillReceiveProps(nextProps){
    const { history } = this.props;
    nextProps.isAuth  && history.push(`/user`);
    
  }

  handleChangeEmail = (e) => {
    this.setState({
    username: e.target.value
    })
  }

  handleChangePass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.postLogin({ ...this.state })
  }
  
  handleClickAnchor = () => {
    const { history } = this.props;
    history.push(`/register`)
  }

  render() {
    const { isFetching } = this.props;
    return (
      <React.Fragment>
        <Home/>
        <LoginUI 
          onClick={this.handleClick}
          onChangeEmail={this.handleChangeEmail}
          onChangePass={this.handleChangePass}
          loading={isFetching}
          onClickAnchor={this.handleClickAnchor}
        />
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    isAuth: state.login.isAuth,
  }
}

export const Login = withRouter(connect(mapStateToProps, { postLogin })(LoginRaw))
