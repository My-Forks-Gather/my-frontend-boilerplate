import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { StoreType } from 'src/modules'
import { counterAction, CounterActionType, CounterStateType } from 'src/modules/counter'

interface Props {
  counter: CounterStateType
  action: CounterActionType
}

export const Counter: React.SFC<Props> = props => (
  <React.Fragment>
    <div>count: {props.counter.count}</div>
    <button onClick={() => props.action.inc()}>inc</button>
    <button onClick={() => props.action.dec()}>dec</button>
    <button onClick={() => props.action.plus(10)}>+10</button>
    <button onClick={() => props.action.minus(10)}>-10</button>
    <button onClick={() => props.action.reset()}>reset</button>
  </React.Fragment>
)

const mapStateToProps = (state: StoreType) => ({
  counter: state.counter
})

const mapDisptachToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators({ ...counterAction }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Counter)
