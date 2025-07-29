import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Card from '../../components/card/card';
import EventCard, { EventData } from '../../components/eventcard/eventCard';
import Icon from '../../components/icon/Icon';
import { theme } from '../../constants/Colors';
import { NAVIGATORS, SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';
import { RootStackParamList } from '../../navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const featuredEvent: EventData = {
  id: '1',
  title: 'Antalya Ters Ev',
  date: '29 Haz',
  location: 'Muratpaşa',
  attendeeCount: 40,
  imageUrl: require('../../assets/images/antalyatersev.png'),
  attendeeAvatars: [
    require('../../assets/images/insan1.jpg'),
    require('../../assets/images/insan2.jpg'),
  ],
};

const popularEvents: EventData[] = [
  {
    id: '2',
    title: 'Antalya Oyuncak Müzesi',
    date: 'Her gün',
    time: '08.00 / 18.00',
    imageUrl: require('../../assets/images/oyuncakmuzesi.png'),
  },
  {
    id: '3',
    title: 'Macera Parkı',
    date: '31 Haziran',
    time: '08.00 / 20.00',
    imageUrl: require('../../assets/images/macerapark.png'),
  },

];

export default function Home() {
  const navigation = useNavigation<NavigationProp>();
  const {
    calculateWidth,
    calculateHeight,
    calculateFontSize,
  } = useResponsive();

  const handleEventPress = (eventId: string, eventTitle: string) => {
    navigation.navigate(NAVIGATORS.EVENT_NAVIGATOR, {
      screen: 'EventDetail',
      params: {
        eventId,
        eventTitle,
      },
    } as any);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.greyscale[50] }}>
      
      {/* Üst Bar (Bu alan ScrollView dışında olduğu için kendi padding'i kalmalı) */}
      <View
        style={{
          backgroundColor: theme.colors.greyscale[50],
          paddingHorizontal: calculateWidth(24),
          paddingTop: calculateHeight(24),
          paddingBottom: calculateHeight(8),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 2,
        }}
      >
        <Text
          style={{
            fontSize: calculateFontSize(28),
            fontWeight: '700',
            color: theme.colors.primary[500],
            fontFamily: 'SFProDisplay-Bold',
          }}
        >
          Kidswiser
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: calculateWidth(16),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.SEARCH)}
            style={{
              padding: calculateWidth(4),
              marginRight: calculateWidth(12),
            }}
          >
            <Icon
              name="search"
              size={24}
              color={theme.colors.greyscale[900]}
            />
          </TouchableOpacity>
          <Icon
            name="bell"
            size={24}
            color={theme.colors.greyscale[900]}
          />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: theme.colors.greyscale[50] }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: calculateWidth(24) }}
      >
        {/* Konum Kartı */}
        <Card
          title="Aktif Konumunuz"
          subtitle="Muratpaşa/Antalya"
          fullWidth
          style={{
            marginBottom: calculateHeight(26),
            marginTop: calculateHeight(24),
            height: calculateHeight(88),
            borderRadius: 26,
            paddingRight: calculateWidth(16)
          }}
        >
          <View
            style={{
              width: calculateWidth(64),
              height: calculateWidth(64),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <Image
              source={require('../../assets/images/mapmockimage.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: calculateWidth(24),
                height: calculateWidth(24),
                borderRadius: 20,
                backgroundColor: theme.colors.primary[500],
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.20,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Icon
                name="map-pin"
                size={14}
                color={theme.colors.white}
              />
            </View>
          </View>
        </Card>

        {/* Özel Etkinlik */}
        <View>
          <Text
            style={{
              fontSize: calculateFontSize(20),
              fontWeight: '700',
              color: theme.text.primary,
              marginBottom: calculateHeight(8),
              fontFamily: 'SFProDisplay-Bold',
            }}
          >
            Özel Etkinlik
          </Text>

          <EventCard
            event={featuredEvent}
            variant="featured"
            showAttendees
            onPress={() => handleEventPress(featuredEvent.id, featuredEvent.title)}
          />
        </View>

        {/* Popüler Etkinlikler */}
        <View
          style={{
            marginTop: calculateHeight(8),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: calculateHeight(8),
            }}
          >
            <Text
              style={{
                fontSize: calculateFontSize(20),
                fontWeight: '700',
                color: theme.text.primary,
                fontFamily: 'SFProDisplay-Bold',
              }}
            >
              Popüler Etkinlikler
            </Text>

            <Text
              style={{
                fontSize: calculateFontSize(14),
                color: theme.colors.primary[500],
                fontWeight: '600',
              }}
            >
              Tümünü Gör
            </Text>
          </View>

          {popularEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              variant="list"
              showAttendees={false}
              onPress={() => handleEventPress(event.id, event.title)}
            />
          ))}
        </View>

        {/* Sayfa sonu için boşluk */}
        <View style={{ height: calculateHeight(32) }} />
      </ScrollView>
    </SafeAreaView>
  );
}