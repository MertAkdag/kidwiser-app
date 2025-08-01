import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Icon, { IconName } from '../icon/Icon';

interface TabItem {
  key: string;
  label: string;
  icon: IconName;
  iconOutline: IconName;
}

const tabItems: TabItem[] = [
  {
    key: 'Home',
    label: 'Anasayfa',
    icon: 'home',
    iconOutline: 'home-outline'
  },
  {
    key: 'Favorites',
    label: 'Favoriler', 
    icon: 'heart',
    iconOutline: 'heart-outline'
  },
  {
    key: 'Ticket',
    label: 'Biletlerim',
    icon: 'ticket',
    iconOutline: 'ticket-outline'
  },
  {
    key: 'Profile',
    label: 'Profil',
    icon: 'user',
    iconOutline: 'user-outline'
  }
];

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  const handleTabPress = (routeName: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate(routeName);
    }
  };

  const getTabBarStyles = () => ({
    container: {
      backgroundColor: theme.colors.white,
      
    },
    content: {
      flexDirection: 'row' as const,
      justifyContent: 'space-around' as const,
      alignItems: 'center' as const,
      paddingHorizontal: calculateWidth(18),
    },
    tabItem: {
      flex: 1,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      paddingVertical: calculateHeight(4.5),
    },

    label: {
      marginTop: calculateHeight(4),
      fontSize: calculateFontSize(12),
      fontWeight: '600' as const,
      textAlign: 'center' as const,
    }
  });

  const styles = getTabBarStyles();

  const renderTabItem = (item: TabItem, index: number) => {
    const routeName = state.routeNames[index];
    const isFocused = state.index === index;
    
    const iconColor = isFocused ? theme.colors.primary[500] : theme.colors.greyscale[600];
    const labelColor = isFocused ? theme.colors.primary[500] : theme.colors.greyscale[600];
    const iconName = isFocused ? item.icon : item.iconOutline;

    return (
      <TouchableOpacity
        key={item.key}
        style={styles.tabItem}
        onPress={() => handleTabPress(routeName, isFocused)}
        activeOpacity={0.7}
      >
        <Icon
          name={iconName}
          size={calculateWidth(24)}
          color={iconColor}
        />
        
        <Text 
          style={[
            styles.label,
            { 
              color: labelColor,
              fontWeight: isFocused ? '700' : '400'
            }
          ]}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {tabItems.map((item, index) => renderTabItem(item, index))}
      </View>
    </SafeAreaView>
  );
} 