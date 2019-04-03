import { StyleSheet, TextStyle } from 'react-native'

interface Styles {
  icon: TextStyle
}

export default StyleSheet.create<Styles>({
  icon: {
    fontSize: 24,
    color: '#333',
  },
})
