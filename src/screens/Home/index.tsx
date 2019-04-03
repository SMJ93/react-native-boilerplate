import React from 'react'
import { NavigationScreenProps, NavigationParams } from 'react-navigation'

import { Screen, Text, HeaderDrawerButton } from '../../components'

type Props = NavigationScreenProps<{}>

const HomeScreen = ({ navigation }: Props) => (
  <Screen>
    <Text>Home</Text>
    <Text link onPress={() => navigation.push('Support')}>
      Go to support
    </Text>
  </Screen>
)

HomeScreen.navigationOptions = ({ navigation }: NavigationParams) => ({
  title: 'Home',
  headerRight: <HeaderDrawerButton navigation={navigation} />,
})

export default HomeScreen
