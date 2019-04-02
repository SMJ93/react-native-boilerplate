import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { Root } from '../navigators'

const RootContainer = createAppContainer(Root)

export default class App extends Component {
  render() {
    return <RootContainer />
  }
}
