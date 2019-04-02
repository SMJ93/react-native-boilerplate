import { createStackNavigator } from 'react-navigation'

import Tabs from './Tabs'
import { Initialiser } from '../screens'

export default createStackNavigator(
  {
    Initialiser,
    Tabs,
  },
  {
    initialRouteName: 'Initialiser',
    defaultNavigationOptions: {
      header: null,
    },
  }
)
