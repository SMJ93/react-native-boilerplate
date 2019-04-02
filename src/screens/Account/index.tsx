import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { Screen, Text } from '../../components'

type Props = NavigationScreenProps<{}>

const AccountScreen = ({ navigation }: Props) => (
  <Screen>
    <Text>Account</Text>
    <Text link onPress={() => navigation.push('Settings')}>
      Go to settings
    </Text>
  </Screen>
)

AccountScreen.navigationOptions = {
  title: 'Account',
}

export default AccountScreen
