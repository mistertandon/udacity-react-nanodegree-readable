import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import { category } from './reducers/category'
import { post } from './reducers/post'
import App from './components/App'

const appReducers = combineReducers({
  category,
  post
})

const store = createStore(appReducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();