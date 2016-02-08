import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const CALCULATOR_ADDITION = 'CALCULATOR_ADDITION'
export const CALCULATOR_SUBTRACTION = 'CALCULATOR_SUBTRACTION'
export const CALCULATOR_MULTIPLICATION = 'CALCULATOR_MULTIPLICATION'
export const CALCULATOR_DIVISION = 'CALCULATOR_DIVISION'

// ------------------------------------
// Actions
// ------------------------------------
export const addition = createAction(CALCULATOR_ADDITION, (value = 0) => value)
export const subtraction = createAction(CALCULATOR_SUBTRACTION, (value = 0) => value)
export const multiplication = createAction(CALCULATOR_MULTIPLICATION, (value = 0) => value)
export const division = createAction(CALCULATOR_DIVISION, (value = 0) => value)

export const actions = {
  addition,
  subtraction,
  multiplication,
  division
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CALCULATOR_ADDITION]: (state, { payload }) => state + payload,
  [CALCULATOR_SUBTRACTION]: (state, { payload }) => state - payload,
  [CALCULATOR_MULTIPLICATION]: (state, { payload }) => state * payload,
  [CALCULATOR_DIVISION]: (state, { payload }) => state / payload
}, 1)
