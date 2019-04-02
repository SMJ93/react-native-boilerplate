import React, { ReactNode } from 'react'
import { ScrollView } from 'react-native'

interface Props {
  children: ReactNode
}

export default ({ children }: Props) => <ScrollView>{children}</ScrollView>
