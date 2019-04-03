import React from 'react'
import { NavigationScreenProps, NavigationParams } from 'react-navigation'

import { Screen, Text, HeaderDrawerButton } from '../../components'

type Props = NavigationScreenProps<{}>

const AccountScreen = ({ navigation }: Props) => (
  <Screen>
    <Text>Account</Text>
    <Text link onPress={() => navigation.push('Settings')}>
      Go to settings
    </Text>
  </Screen>
)

AccountScreen.navigationOptions = ({ navigation }: NavigationParams) => ({
  title: 'Account',
  headerRight: <HeaderDrawerButton navigation={navigation} />,
})

export default AccountScreen
