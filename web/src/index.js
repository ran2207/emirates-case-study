import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home, Watchlist } from './scenes'
import store from './store'

import { unregister } from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/watchlist" exact component={Watchlist} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

unregister()
