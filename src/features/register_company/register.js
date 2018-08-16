import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {RegisterUI}  from '../../ui/molecules/register-company'
import { postRegisterCompany } from './action'
import PropTypes from 'prop-types'
import { Home } from '../home';

class RegisterCompanyRaw extends Component {

    static propTypes = {
      isFetching: PropTypes.bool,
      isAuth: PropTypes.bool,
      error: PropTypes.bool,
      errorMsg: PropTypes.string
    }
  
    state = {
      name: '',
      industry: '', 
      sub_industry: '',
    }
    
    componentWillReceiveProps(nextProps){
      const { history } = this.props;
      nextProps.isAuth && history.push(`/user`)
    }
  
    handleChangeName = (e) => {
      this.setState({
      name: e.target.value
      })
    }
    handleChangeIndustry = (e) => {
      this.setState({
      industry: e.target.value
      })
    }
    handleChangeSubindustry = (e) => {
      this.setState({
      sub_industry: e.target.value
      })
    }
    handleClick = (e) => {
      e.preventDefault();
      this.props.postRegisterCompany({ ...this.state })
    }
  
    render() {
      // const { isFetching, error, errorMsg } = this.props;
      return (
        <React.Fragment>
          <Home/>
          <RegisterUI 
            onClick={this.handleClick}
            onChangeName={this.handleChangeName}
            onChangeIndustry={this.handleChangeIndustry}
            onChangeSubindustry={this.handleChangeSubindustry}
            // error={error}
            // errorMsg={errorMsg}
            // loading={isFetching}
          />
          </React.Fragment>
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
      isFetching: state.registration.isFetching,
      isAuth: state.registration.isAuth,
      error: state.registration.err,
      errorMsg: state.registration.message
    }
  }
  
  export const RegisterComp = withRouter(connect(mapStateToProps, { postRegisterCompany })(RegisterCompanyRaw))