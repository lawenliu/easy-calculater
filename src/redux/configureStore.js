import { applyMiddleware, createStore } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore({ initialState = {}, history }) {
  // Sync with router via history instance (main.js)
  const routerMiddleware = syncHistory(history)

  // Compose final middleware and use devtools in debug environment
  const middleware = applyMiddleware(thunk, routerMiddleware)

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
