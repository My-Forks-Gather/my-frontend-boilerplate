import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { history, store } from 'src/modules'
import * as routes from 'src/routes'

const App: React.SFC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" component={routes.Counter} />
        <Route render={routes.NotFoundRedirectToRoot} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#root'))
