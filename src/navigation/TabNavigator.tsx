import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import CustomTabBar from '../components/bottomnavigation/customTabBar';
import { SCREENS } from '../constants/screens';
import FavoritesScreen from '../screens/favorites';
import HomeScreen from '../screens/home';
import TicketScreen from '../screens/ticket';
import ProfileNavigator from './ProfileNavigator';

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
      tabBar={(props) => {
        const route = props.state.routes[props.state.index];
        const routeName = getFocusedRouteNameFromRoute(route) ?? SCREENS.PROFILE;
        
        if (routeName === SCREENS.USER_INFO) {
          return null;
        }
        
        return <CustomTabBar {...props} />;
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Anasayfa',
        }}
      />
      <Tab.Screen
        name={SCREENS.FAVORITES}
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoriler',
        }}
      />
      <Tab.Screen
        name={SCREENS.TICKET}
        component={TicketScreen}
        options={{
          tabBarLabel: 'Etkinliklerim',
        }}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator 