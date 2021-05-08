// libraries
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// reducers
import movies from './reducers/movies.js'
import nominees from './reducers/nominees.js'
import user from './reducers/user.js'

const reducer = combineReducers({
    movies,
    nominees,
    user
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store