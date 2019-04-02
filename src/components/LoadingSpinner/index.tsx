import React from 'react'
import { ActivityIndicator, ViewStyle } from 'react-native'

interface Props {
  style?: ViewStyle
  small?: boolean
}

const LoadingSpinner = ({ style, small }: Props) => <ActivityIndicator style={style} size={small ? 'small' : 'large'} />

LoadingSpinner.defaultProps = {
  small: false,
}

export default LoadingSpinner
