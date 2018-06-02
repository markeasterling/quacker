import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()

const initialState = {}
const middleware = [thunk, routerMiddleware(history)]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware), 
  ...enhancers
)

const store = createStore(
  rootReducer, 
  initialState, 
  composedEnhancers
)

export default store