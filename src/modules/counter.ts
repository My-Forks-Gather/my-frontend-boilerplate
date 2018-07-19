import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

const actionCreator = actionCreatorFactory('counter')

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterAction = {
  reset: actionCreator('RESET'),
  inc: actionCreator('INC'),
  dec: actionCreator('DEC'),
  plus: actionCreator<number>('PLUS'),
  minus: actionCreator<number>('MINUS')
}

export type CounterAction = typeof counterAction

export const counterReducer = reducerWithInitialState(initialState)
  .case(counterAction.reset, () => initialState)
  .case(counterAction.inc, state => ({
    ...state,
    count: state.count + 1
  }))
  .case(counterAction.dec, state => ({
    ...state,
    count: state.count - 1
  }))
  .case(counterAction.plus, (state, payload) => ({
    ...state,
    count: state.count + payload
  }))
  .case(counterAction.minus, (state, payload) => ({
    ...state,
    count: state.count - payload
  }))
  .build()
