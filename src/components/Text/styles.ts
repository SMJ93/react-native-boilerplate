import { StyleSheet, TextStyle } from 'react-native'

interface Styles {
  text: TextStyle
  h1: TextStyle
  h2: TextStyle
  h3: TextStyle
  label: TextStyle
  link: TextStyle
  bold: TextStyle
  underline: TextStyle
  italic: TextStyle
  small: TextStyle
  center: TextStyle
}

export default StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 22,
  },
  italic: {
    fontStyle: 'italic',
  },
  label: {
    fontWeight: 'bold',
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  small: {
    fontSize: 14,
  },
  text: {
    color: '#333',
    fontSize: 18,
  },
  underline: {
    textDecorationLine: 'underline',
  },
}) as Styles
