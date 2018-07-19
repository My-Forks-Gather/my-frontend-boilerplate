import loadable from 'loadable-components'
import * as React from 'react'
import { Redirect } from 'react-router-dom'

export const Counter = loadable(() => import('src/components/Counter'))
export const NotFoundRedirectToRoot = () => <Redirect to="/" />
