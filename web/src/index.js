import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Home } from './scenes'
import store from './store'

import { unregister } from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
//import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)

unregister()
