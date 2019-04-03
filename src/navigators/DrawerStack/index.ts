import { createDrawerNavigator } from 'react-navigation'

import HomeTabs from './HomeTabs'
import AboutStack from './AboutStack'
import LegalStack from './LegalStack'

export default createDrawerNavigator({
  HomeTabs: {
    screen: HomeTabs,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  AboutStack: {
    screen: AboutStack,
    navigationOptions: {
      drawerLabel: 'About',
    },
  },
  LegalStack: {
    screen: LegalStack,
    navigationOptions: {
      drawerLabel: 'Legal',
    },
  },
})
