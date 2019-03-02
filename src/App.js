import React, { Component } from 'react'
import Application from './components/App'
import { Provider } from 'react-redux'
import RootStore from './RootReducer'

import "./_layout.scss"
import './App.css'


class App extends Component {
  render() {
    return (
  <Provider store={RootStore}>
    <Application/>
  </Provider>
    )
  }
}

export default App

