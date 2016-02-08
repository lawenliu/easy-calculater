import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory, useBasename } from 'history'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

const history = useBasename(createHistory)({
  basename: __BASENAME__
})

const initialState = window.__INITIAL_STATE__
const store = configureStore({ initialState, history })

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
