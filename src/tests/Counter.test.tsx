import { shallow } from 'enzyme'
import * as React from 'react'
import { Counter } from 'src/components/Counter'
import { counterAction, counterInitialState } from 'src/modules/counter'

describe('components/Counter', () => {
  test('Rendered <Counter />', () => {
    shallow(<Counter counter={counterInitialState} action={counterAction} />)
  })
})
