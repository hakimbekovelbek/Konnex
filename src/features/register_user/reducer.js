import { 
    POST_REGISTRATION_REQUEST,
    POST_REGISTRATION_SUCCESS,
    POST_REGISTRATION_FAILURE,
    POST_CONTINUE_REG
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
  
  export const registration = (state = initialState, action) => {
    switch(action.type) {
      case POST_REGISTRATION_REQUEST:
        return {
          ...state,
          isFetching: true,
          err: false
        } 
      case POST_REGISTRATION_SUCCESS:
        return {
          ...state,
          isFetching: false,
          status: true,
          data: action.data || state.data,
          message: action.message
        }
      case POST_REGISTRATION_FAILURE:
        return {
          ...state,
          err: true,
          isFetching: false
        }
        case POST_CONTINUE_REG:
        return{
          isAuth: true
        }
      default: 
        return state
    }
  }