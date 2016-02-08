import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from 'containers/App'
import Index from 'views/Home/Index'
import About from 'views/Home/About'

export default (
  <Route path="/" component={App}>
    <IndexRoute components={Index} />
    <Route path="/Index" component={Index} />
    <Route path="/About" component={About} />
    <Redirect from="*" to="/Index" />
  </Route>
)
