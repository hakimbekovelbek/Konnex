import api from '../../api'

export const POST_REGISTRATION_USER_REQUEST = 'POST_REGISTRATION_USER_REQUEST'
export const POST_REGISTRATION_USER_SUCCESS = 'POST_REGISTRATION_USER_SUCCESS'
export const POST_REGISTRATION_USER_FAILURE = 'POST_REGISTRATION_USER_FAILURE'
export const POST_FINISH_REG = 'POST_FINISH_REG'
// export const LOGOUT = 'LOGOUT'


const postRegistrationUserRequest = () => ({
    type: POST_REGISTRATION_USER_REQUEST
  })
  
  const postRegistrationUserSuccess = ({ status, data, message }) => ({
    type: POST_REGISTRATION_USER_SUCCESS,
    ...status,
    ...data,
    ...message
  })
  
  
  const postRegistrationUserFailure = (err) => ({
    type: POST_REGISTRATION_USER_FAILURE,
    err,
  })

  const postFinishReg = () =>({
    type: POST_FINISH_REG
  })
  
  export const postRegisterUser = ({ 
    company, 
    first_name, last_name, mobile, username, password }) => (dispatch, getState) => {
    dispatch(postRegistrationUserRequest());
    
    return api.postRegisterUser({ 
      company, 
      first_name, last_name, mobile, username, password })
      .then(res => {
        dispatch(postRegistrationUserSuccess(res))
        getState().registration.status === true
          ? dispatch(postFinishReg()) : dispatch(postRegistrationUserFailure(true))
      })
      .catch(err => {
        console.log('err')
        dispatch(postRegistrationUserFailure(true))
      })
  
  }