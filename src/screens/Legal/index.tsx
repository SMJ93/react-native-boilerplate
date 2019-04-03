import React from 'react'

import { Screen, Text, HeaderDrawerButton } from '../../components'
import { NavigationParams } from 'react-navigation'

const LegalScreen = () => (
  <Screen>
    <Text>Legal</Text>
  </Screen>
)

LegalScreen.navigationOptions = ({ navigation }: NavigationParams) => ({
  title: 'Legal',
  headerRight: <HeaderDrawerButton navigation={navigation} />,
})

export default LegalScreen
