import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { Screen, Text } from '../../components'

type Props = NavigationScreenProps<{}>

const HomeScreen = ({ navigation }: Props) => (
  <Screen>
    <Text>Home</Text>
    <Text link onPress={() => navigation.push('Support')}>
      Go to support
    </Text>
  </Screen>
)

HomeScreen.navigationOptions = {
  title: 'Home',
}

export default HomeScreen
