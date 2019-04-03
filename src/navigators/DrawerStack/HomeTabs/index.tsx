import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import HomeTabStack from './HomeTabStack'
import AccountTabStack from './AccountTabStack'
import { Icon } from '../../../components'

export default createBottomTabNavigator(
  {
    HomeTabStack: {
      screen: HomeTabStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: { tintColor: string }) => <Icon name="home" color={tintColor} />,
        tabBarLabel: 'Home',
      },
    },
    AccountTabStack: {
      screen: AccountTabStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: { tintColor: string }) => <Icon name="account" color={tintColor} />,
        tabBarLabel: 'Account',
      },
    },
  },
  {}
)
