import { createBottomTabNavigator } from 'react-navigation'

import HomeTab from './HomeTab'
import AccountTab from './AccountTab'

export default createBottomTabNavigator(
  {
    HomeTab,
    AccountTab,
  },
  {}
)
