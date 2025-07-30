import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../constants/screens';
import {
    ForgotPassword,
    ForgotPasswordVerification,
    Login,
    NewPassword,
    PasswordResetSuccess,
    Register,
    ResetPasswordEmail,
    ResetPasswordPhone,
    VerificationCode
} from '../screens/auth';
import { InterestSelection } from '../screens/shared';

export type AuthStackParamList = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.REGISTER]: undefined;
  [SCREENS.VERIFICATION_CODE]: undefined;
  [SCREENS.FORGOT_PASSWORD]: undefined;
  [SCREENS.RESET_PASSWORD_EMAIL]: undefined;
  [SCREENS.RESET_PASSWORD_PHONE]: undefined;
  [SCREENS.FORGOT_PASSWORD_VERIFICATION]: { resetMethod: string; contact: string };
  [SCREENS.NEW_PASSWORD]: { resetMethod: string; contact: string; verificationCode: string };
  [SCREENS.PASSWORD_RESET_SUCCESS]: undefined;
  [SCREENS.INTEREST_SELECTION]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      initialRouteName={SCREENS.LOGIN}
    >
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
      />
      <Stack.Screen
        name={SCREENS.REGISTER}
        component={Register}
      />
      <Stack.Screen
        name={SCREENS.VERIFICATION_CODE}
        component={VerificationCode}
      />
      <Stack.Screen
        name={SCREENS.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen
        name={SCREENS.RESET_PASSWORD_EMAIL}
        component={ResetPasswordEmail}
      />
      <Stack.Screen
        name={SCREENS.RESET_PASSWORD_PHONE}
        component={ResetPasswordPhone}
      />
      <Stack.Screen
        name={SCREENS.FORGOT_PASSWORD_VERIFICATION}
        component={ForgotPasswordVerification}
      />
      <Stack.Screen
        name={SCREENS.NEW_PASSWORD}
        component={NewPassword}
      />
      <Stack.Screen
        name={SCREENS.PASSWORD_RESET_SUCCESS}
        component={PasswordResetSuccess}
      />
      <Stack.Screen name={SCREENS.INTEREST_SELECTION}>
        {() => (
          <InterestSelection 
            mode="onboarding"
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator; 