import React, { ReactNode } from 'react'
import { RegisteredStyle, Text as RNText, TextStyle } from 'react-native'
import styles from './styles'

interface Props {
  children: ReactNode
  style?: RegisteredStyle<TextStyle> | TextStyle
  h1?: boolean
  h2?: boolean
  h3?: boolean
  label?: boolean
  bold?: boolean
  underline?: boolean
  italic?: boolean
  numberOfLines?: number
  small?: boolean
  center?: boolean
  link?: boolean
  onPress?(): void
}

const Text = (props: Props) => {
  const {
    children,
    style,
    h1,
    h2,
    h3,
    label,
    bold,
    onPress,
    link,
    underline,
    italic,
    numberOfLines,
    small,
    center,
  } = props

  return (
    <RNText
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[
        styles.text,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        label && styles.label,
        bold && styles.bold,
        underline && styles.underline,
        italic && styles.italic,
        small && styles.small,
        center && styles.center,
        link && styles.link,
        style,
      ]}
    >
      {children}
    </RNText>
  )
}

Text.defaultProps = {
  bold: false,
  center: false,
  h1: false,
  h2: false,
  h3: false,
  italic: false,
  label: false,
  link: false,
  numberOfLines: 99,
  onPress: undefined,
  small: false,
  underline: false,
}

export default Text
