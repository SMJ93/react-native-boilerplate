import React from 'react'
import { Text, TextStyle } from 'react-native'

import styles from './styles'

interface Props {
  name: string
  color: string
  style?: TextStyle
}

// @todo replace with image icons
const iconMap = {
  home: '♤',
  account: '♧',
}

const Icon = ({ name, color, style }: Props) => {
  const icon = iconMap[name]

  return <Text style={[styles.icon, { color }, style]}>{icon}</Text>
}

export default Icon
