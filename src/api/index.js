import axios from 'axios'

//POST URLS
const URL_AUTH = 'http://qa-api.konnex.us/user/auth/'
const URL_REGISTER_USER = 'http://qa-api.konnex.us/user/register/'
const URL_REGISTER_COMPANY = 'http://qa-api.konnex.us/public/companies/'


const token= 'qgg0j2Gbp0urlmJzG7YuWqw0ss09B38H4ZyH7qziP2etzTMQPxfCN04XFnQaQzPp'


const postLogin = ({ username, password }) => {
    const config = {
      method: 'post',
      url: URL_AUTH,
      data: {
        username: username,
        password: password
      },
      headers: {
        'content-type': 'application/json',
        Authorization: `Token ${token}`
      }
    }
    
    return axios(config)
  }
  

  const postRegisterCompany = ({ name, industry, sub_industry }) => {
    const config = {
      method: 'post',
      url: URL_REGISTER_COMPANY,
      data: {
        name: name,
        industry: industry, 
        sub_industry: sub_industry,
      },
      headers: {
        'content-type': 'application/json',
        // Authorization: `Token ${tokenRegister}`
      }
    }
    return axios(config)
  }
  
  const postRegisterUser = ({ password, first_name, last_name, mobile, username, name }) => {
    const config = {
      method: 'post',
      url: URL_REGISTER_USER,
      data: {
          first_name: first_name,
          last_name: last_name,
          mobile: mobile,
          username: username,
          password: password,
          company: '1142'
      },
      headers: {
        'content-type': 'application/json',
      }
    }
    return axios(config)
  }

  
  
export default {
    postLogin,
    postRegisterCompany,
    postRegisterUser,
  }