import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../constants/screens';
import ProfileScreen from '../screens/profile';
import UserInfo from '../screens/profile/UserInfo';

export type ProfileStackParamList = {
  [SCREENS.PROFILE_HOME]: undefined;
  [SCREENS.USER_INFO]: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      initialRouteName={SCREENS.PROFILE_HOME}
    >
      <Stack.Screen
        name={SCREENS.PROFILE_HOME}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={SCREENS.USER_INFO}
        component={UserInfo}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator; 