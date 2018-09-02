import loadable from 'loadable-components'
import * as React from 'react'
import { Redirect } from 'react-router-dom'

// @ts-ignore
export const Counter = loadable(() => import('src/components/pages/counter'))
export const NotFoundRedirectToRoot = () => <Redirect to="/" />
