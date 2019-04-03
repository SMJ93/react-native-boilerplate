import { createStackNavigator } from 'react-navigation'

import Drawer from './DrawerStack'
import { Initialiser } from '../screens'

export default createStackNavigator(
  {
    Initialiser,
    Drawer,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
)
