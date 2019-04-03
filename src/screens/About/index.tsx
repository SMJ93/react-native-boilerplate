import React from 'react'

import { Screen, Text, HeaderDrawerButton } from '../../components'
import { NavigationParams } from 'react-navigation'

const AboutScreen = () => (
  <Screen>
    <Text>About</Text>
  </Screen>
)

AboutScreen.navigationOptions = ({ navigation }: NavigationParams) => ({
  title: 'About',
  headerRight: <HeaderDrawerButton navigation={navigation} />,
})

export default AboutScreen
