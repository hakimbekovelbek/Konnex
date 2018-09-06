import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import { login } from '../features/login'
import { registration } from '../features/register_company'
import { registrationUser } from '../features/register_user'

const rootReducer = combineReducers({
    login,
    registration,
    registrationUser,
    form: formReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))