import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

//store - global state
//action name that describe the action to do
// reducers  check the action to apply to the store
//dispach luncher




const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="outerW">
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
