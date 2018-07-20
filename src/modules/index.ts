import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { counterReducer, CounterState } from 'src/modules/counter'

export interface Store {
  counter: CounterState
}

const reducers = combineReducers({
  counter: counterReducer
})

export const history = createBrowserHistory()

export const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)
