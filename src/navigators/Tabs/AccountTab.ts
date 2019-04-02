import { createStackNavigator } from 'react-navigation'

import { Account, Settings } from '../../screens'

export default createStackNavigator(
  {
    Account,
    Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0080ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
