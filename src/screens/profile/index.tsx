import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Icon from '../../components/icon/Icon';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';
import { ProfileStackParamList } from '../../navigation/ProfileNavigator';
import { RootStackParamList } from '../../navigation/RootNavigator';

type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackParamList>;
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  onPress: () => void;
}

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileNavigationProp>();
  const rootNavigation = useNavigation<RootNavigationProp>();
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  const menuItems: MenuItem[] = [
    {
      id: 'user-info',
      title: 'Kullanıcı Bilgileri',
      icon: 'user-outline', 
      onPress: () => {
        navigation.navigate(SCREENS.USER_INFO);
      },
    },
    {
      id: 'notifications',
      title: 'Bildirim Ayarları',
      icon: 'bell', 
      onPress: () => {
        console.log('Navigate to notifications');
      },
    },
    {
      id: 'interests',
      title: 'İlgi Alanları',
      icon: 'settings', 
      onPress: () => {
        rootNavigation.navigate(SCREENS.PROFILE_INTEREST_SELECTION);
      },
    },
    {
      id: 'faq',
      title: 'Sıkça Sorulan Sorular',
      icon: 'question-mark',
      onPress: () => {
        console.log('Navigate to FAQ');
      },
    },
  ];

  const renderMenuItem = (item: MenuItem) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          paddingVertical: calculateHeight(4),
          backgroundColor: theme.colors.white,
          marginBottom: calculateHeight(16),
          borderRadius: calculateWidth(16),
          width: calculateWidth(327),
        }}
        onPress={item.onPress}
        activeOpacity={0.8}
      >
        <View
          style={{
            width: calculateWidth(28),
            height: calculateWidth(28),
            backgroundColor: theme.colors.primary[50],
            borderRadius: calculateWidth(20),
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: calculateWidth(16),
          }}
        >
          <Icon
            name={item.icon as any}
            size={16}
            color={theme.colors.primary[500]}
          />
        </View>
        
        <Text
          style={{
            flex: 1,
            fontSize: calculateFontSize(16),
            fontWeight: '500',
            color: theme.colors.greyscale[900],
            fontFamily: 'SFProDisplay-Bold',
          }}
        >
          {item.title}
        </Text>
        
        <Icon
          name="chevron-right"
          size={20}
          color={theme.colors.greyscale[600]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.greyscale[50] }}>
      <View
        style={{ flex: 1, backgroundColor: theme.colors.white }}

      >
        <View
          style={{
            alignItems: 'center',
            paddingTop: calculateHeight(40),
            backgroundColor: theme.colors.white,
          }}
        >
        
        <View style={{
            width: calculateWidth(359),
            height: calculateWidth(100),
            borderBottomLeftRadius: calculateWidth(24),
            borderBottomRightRadius: calculateWidth(24),
            marginTop: calculateHeight(-40),
            marginBottom: calculateHeight(-50),
            backgroundColor: theme.colors.greyscale[50],
            zIndex: 1,
          }}> 
          </View>
              <View
            style={{
              width: calculateWidth(100),
              height: calculateWidth(100),
              marginBottom: calculateHeight(16),
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.15,
              shadowRadius: 15,
              elevation: 10,
              zIndex: 1,
            }}
          >

   
          <View
            style={{
              width: calculateWidth(100),
              height: calculateWidth(100),
              borderRadius: calculateWidth(50),
              backgroundColor: theme.colors.greyscale[200],
              marginBottom: calculateHeight(16),
              borderWidth: 3,
              borderColor: theme.colors.white,
              overflow: 'hidden',
             
     
            }}
          >
            <Image
              source={require('../../assets/images/insan1.jpg')}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
            />
          </View>
          </View>
          <Text
            style={{
              fontSize: calculateFontSize(24),
              fontWeight: '600',
              color: theme.colors.greyscale[900],
              fontFamily: 'SFProDisplay-Bold',
              marginBottom: calculateHeight(8),
            }}
          >
            Muhittin Topalak
          </Text>
          
          <Text
            style={{
              fontSize: calculateFontSize(16),
              color: theme.colors.greyscale[500],
              fontFamily: 'SFProDisplay-Regular',
              paddingBottom: calculateHeight(32), 
            }}
          >
            +0555 555 55 55
          </Text>

          <View 
            style={{
              height: 1,
              backgroundColor: theme.colors.greyscale[200],
              width: calculateWidth(327),
              alignSelf: 'center',
            }} 
          />
        </View>

        <View style={{ paddingHorizontal: calculateWidth(24), paddingTop: calculateHeight(24)}}>
          {menuItems.map((item) => renderMenuItem(item))}
        </View>
      </View>
    </SafeAreaView>
  );
}