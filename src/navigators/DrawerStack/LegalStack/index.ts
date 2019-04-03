import { createStackNavigator } from 'react-navigation'

import { Legal } from '../../../screens'

export default createStackNavigator(
  {
    Legal,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#61B329',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
