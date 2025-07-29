import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomTabBar from '../components/bottomnavigation/customTabBar';
import { SCREENS } from '../constants/screens';
import FavoritesScreen from '../screens/favorites';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import TicketScreen from '../screens/ticket';

export type TabParamList = {
  [SCREENS.HOME]: undefined
  [SCREENS.FAVORITES]: undefined
  [SCREENS.TICKET]: undefined
  [SCREENS.PROFILE]: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={SCREENS.FAVORITES}
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
        }}
      />
      <Tab.Screen
        name={SCREENS.TICKET}
        component={TicketScreen}
        options={{
          tabBarLabel: 'Ticket',
        }}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator 