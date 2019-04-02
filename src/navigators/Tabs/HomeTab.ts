import { createStackNavigator } from 'react-navigation'

import { Home, Support } from '../../screens'

export default createStackNavigator(
  {
    Home,
    Support,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
