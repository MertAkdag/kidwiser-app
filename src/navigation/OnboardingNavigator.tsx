import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../constants/screens';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import VerificationCode from '../screens/auth/VerificationCode';
import { Onboarding, Welcome } from '../screens/onboarding';

export type OnboardingStackParamList = {
  [SCREENS.ONBOARDING]: undefined;
  [SCREENS.ONBOARDING_WELCOME]: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.REGISTER]: undefined;
  [SCREENS.VERIFICATION_CODE]: undefined;
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
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
      />
      <Stack.Screen
        name={'Register'}
        component={Register}
      />
      <Stack.Screen
        name={SCREENS.VERIFICATION_CODE}
        component={VerificationCode}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator; 