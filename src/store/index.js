import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import { login } from '../features/login'
import { registration } from '../features/register_company'

const rootReducer = combineReducers({
    login,
    registration,
    form: formReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))