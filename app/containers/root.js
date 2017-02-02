import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/index'
import App from './app'

const preloadedState = {}
const store = createStore(reducers, preloadedState)

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>

export default Root
