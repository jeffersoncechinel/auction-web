import React from 'react'
import { ToastContainer } from 'react-toastify'
import './config/ReactotronConfig'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './services/history'
import Routes from './routes'
import GlobalStyle from './styles/global'
import * as Pusher from 'pusher-js'
import Echo from 'laravel-echo'
import { pusherConfig } from './config/pusher'

import { store, persistor } from './store'

window.Echo = new Echo(pusherConfig);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
