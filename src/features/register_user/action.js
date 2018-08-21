import api from '../../api'

export const POST_REGISTRATION_REQUEST = 'POST_REGISTRATION_REQUEST'
export const POST_REGISTRATION_SUCCESS = 'POST_REGISTRATION_SUCCESS'
export const POST_REGISTRATION_FAILURE = 'POST_REGISTRATION_FAILURE'
export const POST_CONTINUE_REG = 'POST_CONTINUE_REG'
// export const LOGOUT = 'LOGOUT'


const postRegistrationRequest = () => ({
    type: POST_REGISTRATION_REQUEST
  })
  
  const postRegistrationSuccess = ({ status, data, message }) => ({
    type: POST_REGISTRATION_SUCCESS,
    ...status,
    ...data,
    ...message
  })
  
  
  const postRegistrationFailure = (err) => ({
    type: POST_REGISTRATION_FAILURE,
    err,
  })

  const postContinueReg = () =>({
    type: POST_CONTINUE_REG
  })
  
  export const postRegisterCompany = ({ name, industry, sub_industry }) => (dispatch, getState) => {
    dispatch(postRegistrationRequest());
    
    return api.postRegisterCompany({ name, industry, sub_industry })
      .then(res => {
        dispatch(postRegistrationSuccess(res))
        getState().registration.status === true
          ? dispatch(postContinueReg()) : dispatch(postRegistrationFailure(true))
      })
      .catch(err => {
        console.log('err')
        dispatch(postRegistrationFailure(true))
      })
  
  }