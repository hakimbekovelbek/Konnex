import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Home } from '../home'
import { postLogin } from './action'
import LoginUI  from '../../ui/molecules/login'
import PropTypes from 'prop-types'



class LoginRaw extends Component {

  static propTypes = {
    isFetching: PropTypes.bool,
    isAuth: PropTypes.bool,
    error: PropTypes.bool,
    errorMsg: PropTypes.string
  }

  state = {
    username: '',
    password: ''
  }
  
  componentWillReceiveProps(nextProps){
    const { history } = this.props;
    nextProps.isAuth && history.push(`/user`)
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
    const { isFetching, error, errorMsg } = this.props;
    return (
      <React.Fragment>
        <Home/>
        <LoginUI 
          onClick={this.handleClick}
          onChangeEmail={this.handleChangeEmail}
          onChangePass={this.handleChangePass}
          // error={error}
          // errorMsg={errorMsg}
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
    error: state.login.err,
    errorMsg: state.login.message
  }
}

export const Login = withRouter(connect(mapStateToProps, { postLogin })(LoginRaw))
