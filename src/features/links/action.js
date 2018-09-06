


export const ADD_LINK = 'ADD_LINK'
export const UPDATE_LINK = 'UPDATE_LINK'
export const DELETE_LINK = 'DELETE_LINK'
export const READ_LINK = 'READ_LINK'


const addLink = () => ({
    type: ADD_LINK
  })
  
const updateLink = () => ({
    type: UPDATE_LINK
  })
  
const deleteLink = () => ({
    type: DELETE_LINK
  })
  
const readLink = () => ({
    type: READ_LINK
  })
  
  
  
export const postLinks = ({ detail }) => (dispatch, getState) => {
    // dispatch(addLink());
    
    // return api.postLinks({ username, password })
    //   .then(res => {
    //     dispatch(postLoginSuccess(res))
        
    //     getState().login.status === true
    //       ? dispatch(logIN()) : dispatch(postLoginFailure(true))
    //   })
    //   .catch(err => {
    //     console.log('err')
    //     dispatch(postLoginFailure(true))
    //   })
  }