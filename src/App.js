
import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/component/configs/redux/store'
import Index from './component/index'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Index />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
