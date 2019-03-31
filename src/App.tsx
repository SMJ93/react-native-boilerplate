import React, { FunctionComponent } from 'react'
import { Platform, Text, View } from 'react-native'
import styles from './styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

interface Props {}

const App: FunctionComponent = ({  }: Props) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native Boilerplate!</Text>
    <Text style={styles.instructions}>To get started, edit src/App.tsx</Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
)

export default App
