import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import './index.css'
import registerServiceWorker from './registerServiceWorker';

import { category } from './reducers/category'
import { post } from './reducers/post'
import App from './components/App'

const appReducers = combineReducers({
  category,
  post
})

const store = createStore(
  appReducers,
  applyMiddleware(thunk)
)

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();