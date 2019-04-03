import React, { useEffect } from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { Screen, LoadingSpinner } from '../../components'

type Props = NavigationScreenProps<{}>

const InitialiserScreen = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => navigation.push('Drawer'), 750)
  }, [])

  return (
    <Screen>
      <LoadingSpinner />
    </Screen>
  )
}

InitialiserScreen.navigationOptions = {}

export default InitialiserScreen
