import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {RegisterUI}  from '../../ui/molecules/register-company'
import { postRegisterCompany } from './action'
import PropTypes from 'prop-types'
import { RegUI } from '../home';
import { Select } from 'antd';
import debounce from 'lodash/debounce';


const Option = Select.Option;

class RegisterCompanyRaw extends Component {

  
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 100);
  }
  
    static propTypes = {
      isFetching: PropTypes.bool,
      isAuth: PropTypes.bool,
    }
  
    state = {
      name: '',
      industry: '', 
      sub_industry: '',
      data: [],
      datasub: [],
      datacompanies:[],
      value: [],
      id: [],
      fetching: false,
    }
    
    componentWillReceiveProps(nextProps){
      const { history } = this.props;
      nextProps.isAuth && history.push(`/registeruser`)
    }
  
    handleChangeName = (e) => {
      this.setState({
      name: e.target.value
      })
      // console.log(this.state.name);
    }
    handleClick = (e) => {
      e.preventDefault();
      this.props.postRegisterCompany({ ...this.state })
    }
  
  
  fetchUser = () => {
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('http://qa-api.konnex.us/industries/')
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) { // for fetch callback order
          return;
        }
        const data = body.results.map(industry => ({
          text: `${industry.name}`,
          value: industry.name,
          id: industry.id,
  
        }));
        this.setState({ data, fetching: false });
      });
  }


  fetchSubindustry = () => {
   const {industry} = this.state
    const id_ind = industry; 
    const URL = 'http://qa-api.konnex.us/industries/' + id_ind + '/sub_industries/'
    console.log(URL);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ datasub: [], fetching: true });
    fetch(URL)
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) { // for fetch callback order
          return;
        }
        const datasub = body.results.map(subindustry => ({
          textsub: `${subindustry.name}`,
          valuesub: subindustry.name,
          idsub: subindustry.id
        }));
        this.setState({ datasub, fetching: false });
      });
      
  }
  
  fetchCompanies = () => {
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ datacompanies: [], fetching: true });
    fetch('http://qa-api.konnex.us/public/companies/')
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) { // for fetch callback order
          return;
        }
        const datacompanies = body.results.map(company => ({
          text_company: `${company.name}`,
          value_company: company.name,
          id_company: company.id,
  
        }));
        this.setState({ datacompanies, fetching: false });
      });
  }
  
  handleChange = (value, id) => {
    this.setState({
      value,
      data: [],
      fetching: false,
      industry: id.key
    });
    console.log(this.state.industry);
  }
  handleChangeSub = (valuesub, idsub) => {
    this.setState({
      valuesub,
      datasub: [],
      fetching: false,
      sub_industry: idsub.key
    });
    // console.log(this.state.sub_industry);
  }
  handleChangeCompany = (value_company, id_company) => {
    this.setState({
      value_company,
      datacompanies: [],
      fetching: false,
      // sub_industry: idsub.key
    });
    // console.log(this.state.sub_industry);
  }
    
    render() {
      const {data, datasub, datacompanies, value, valuesub, valuecompany} = this.state;
      return (
        <React.Fragment>
          <RegUI/>
          <RegisterUI 
            onClick={this.handleClick}
            onChangeName={this.handleChangeName}
            // onChangeIndustry={this.handleChangeIndustry}
            // onChangeSubindustry={this.handleChangeSubindustry} 
            onFocus={this.fetchUser}
            onFocusSub={this.fetchSubindustry}
            onFocusCompany={this.fetchCompanies}
            showSearch={true}
            showArrow={false}
            labelInValue={false}
            value={value}
            valuesub={valuesub}
            valuecompany={valuecompany}
            filterOption={true}
            onSearch={this.fetchUser}
            onSearchSub={this.fetchSubindustry}
            onSearchCompany={this.fetchCompanies}
            onChange={this.handleChange}
            onChangeSub={this.handleChangeSub}
            onChangeCompany={this.handleChangeCompany}
            children={data.map(d => <Option key={d.id} index={d.value}>{d.text}</Option>)}
            childrensub={datasub.map(p => <Option key={p.idsub} index={p.valuesub}>{p.textsub}</Option>)}
            childrenCompany={datacompanies.map(l => <Option key={l.id_company} index={l.value_company}>{l.text_company}</Option>)}
            >
        </RegisterUI>
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
  
  export const RegisterComp = withRouter(connect(mapStateToProps, { postRegisterCompany })(RegisterCompanyRaw))