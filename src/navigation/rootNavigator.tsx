import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NAVIGATORS } from '../constants/screens'
import TabNavigator from './TabNavigator'

export type RootStackParamList = {
  [NAVIGATORS.TAB_NAVIGATOR]: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={NAVIGATORS.TAB_NAVIGATOR}
        component={TabNavigator}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
