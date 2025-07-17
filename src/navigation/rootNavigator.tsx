import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NAVIGATORS } from '../constants/screens'
import { useAuth } from '../hooks/useAuth'
import OnboardingNavigator from './OnboardingNavigator'
import TabNavigator from './TabNavigator'

export type RootStackParamList = {
  [NAVIGATORS.TAB_NAVIGATOR]: undefined
  [NAVIGATORS.ONBOARDING_NAVIGATOR]: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
  const { onboardingDone } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      {onboardingDone ? (
      <Stack.Screen
        name={NAVIGATORS.TAB_NAVIGATOR}
        component={TabNavigator}
      />
      ) : (
        <Stack.Screen
          name={NAVIGATORS.ONBOARDING_NAVIGATOR}
          component={OnboardingNavigator}
        />
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator
