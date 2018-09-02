import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import 'src/registerServiceWorker'
import * as Routes from 'src/routes'
import { history, store } from 'src/store'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" component={Routes.Counter} />
        <Route render={Routes.NotFoundRedirectToRoot} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'))
