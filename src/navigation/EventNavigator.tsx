import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { theme } from '../constants/Colors';
import EventDetail from '../screens/event/EventDetail';

export type EventStackParamList = {
  EventDetail: {
    eventId: string;
    eventTitle?: string;
  };
 };

const Stack = createNativeStackNavigator<EventStackParamList>();

const EventNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.greyscale[50],
        },
        headerTintColor: theme.colors.greyscale[900],
        headerTitleStyle: {
          fontFamily: 'SFProDisplay-Bold',
          fontSize: 18,
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: theme.colors.greyscale[50],
        },
      }}
    >
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default EventNavigator;