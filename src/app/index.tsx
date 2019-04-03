import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import AppRoot from '../navigators'

const AppContainer = createAppContainer(AppRoot)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
