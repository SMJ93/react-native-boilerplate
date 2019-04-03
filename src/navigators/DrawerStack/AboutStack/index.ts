import { createStackNavigator } from 'react-navigation'

import { About } from '../../../screens'

export default createStackNavigator(
  {
    About,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff87c3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
