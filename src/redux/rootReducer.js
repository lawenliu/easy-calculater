import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import calculator from './modules/calculator'

export default combineReducers({
  calculator,
  router
})
