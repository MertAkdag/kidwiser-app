import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NAVIGATORS, SCREENS } from '../constants/screens'
import SearchScreen from '../screens/search'
import AuthNavigator from './AuthNavigator'
import EventNavigator from './EventNavigator'
import OnboardingNavigator from './OnboardingNavigator'
import TabNavigator from './TabNavigator'

export type RootStackParamList = {
  [NAVIGATORS.TAB_NAVIGATOR]: undefined
  [NAVIGATORS.ONBOARDING_NAVIGATOR]: undefined
  [NAVIGATORS.AUTH_NAVIGATOR]: undefined
  [NAVIGATORS.EVENT_NAVIGATOR]: undefined
  [SCREENS.SEARCH]: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName={NAVIGATORS.ONBOARDING_NAVIGATOR}
    >
      <Stack.Screen
        name={NAVIGATORS.ONBOARDING_NAVIGATOR}
        component={OnboardingNavigator}
      />
      <Stack.Screen
        name={NAVIGATORS.AUTH_NAVIGATOR}
        component={AuthNavigator}
      />
      <Stack.Screen
        name={NAVIGATORS.TAB_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={NAVIGATORS.EVENT_NAVIGATOR}
        component={EventNavigator}
      />
      <Stack.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
