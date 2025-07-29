import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../constants/screens';
import { Onboarding, Welcome } from '../screens/onboarding';

export type OnboardingStackParamList = {
  [SCREENS.ONBOARDING]: undefined;
  [SCREENS.ONBOARDING_WELCOME]: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      initialRouteName={SCREENS.ONBOARDING}
    >
      <Stack.Screen
        name={SCREENS.ONBOARDING}
        component={Onboarding}
      />
      <Stack.Screen
        name={SCREENS.ONBOARDING_WELCOME}
        component={Welcome}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator; 