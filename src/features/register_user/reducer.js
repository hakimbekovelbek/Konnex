import { 
    POST_REGISTRATION_USER_REQUEST,
    POST_REGISTRATION_USER_SUCCESS,
    POST_REGISTRATION_USER_FAILURE,
    POST_FINISH_REG
  } from './action'
  
  const initialState = {
    isFetching: false,
    err: false,
    isAuth: false,
    data: {
      status: '',
      message: '',
      data: {
        id: ''
      }
    }
  }
  
  export const registrationUser = (state = initialState, action) => {
    switch(action.type) {
      case POST_REGISTRATION_USER_REQUEST:
        return {
          ...state,
          isFetching: true,
          err: false
        } 
      case POST_REGISTRATION_USER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          status: true,
          data: action.data || state.data,
          message: action.message
        }
      case POST_REGISTRATION_USER_FAILURE:
        return {
          ...state,
          err: true,
          isFetching: false
        }
        case POST_FINISH_REG:
        return{
          isAuth: true
        }
      default: 
        return state
    }
  }