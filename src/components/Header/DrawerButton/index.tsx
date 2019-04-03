import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from '../../Icon'
import { NavigationScreenProp } from 'react-navigation'
import styles from './styles'

interface Props {
  navigation: NavigationScreenProp<{}>
}

export default ({ navigation }: Props) => (
  <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.drawerButton}>
    <Icon name="home" color="#fff" />
  </TouchableOpacity>
)
