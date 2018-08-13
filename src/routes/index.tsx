import * as React from 'react'
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'

export const Counter = Loadable({
  loader: () => import('src/components/Counter'),
  loading: () => null
})

export const NotFoundRedirectToRoot = () => <Redirect to="/" />
