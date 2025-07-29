import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import { EventStackParamList } from '../../navigation/EventNavigator';


type Props = NativeStackScreenProps<EventStackParamList, 'EventDetail'>;

const mockEventData = {
  id: '1',
  title: 'Antalya Ters Ev',
  date: '29 Haziran',
  time: '07:00',
  location: 'Antalya / Muratpaşa',
  imageUrl: require('../../assets/images/tersev.png'),
  organizerName: 'Ters Ev',
  organizerLogo: require('../../assets/images/tersevorganiztor.png'),
  attendeeCount: 40,
  attendeeAvatars: [
    require('../../assets/images/insan1.jpg'),
    require('../../assets/images/insan2.jpg'),
  ],
  description: "Türkiye'nin İlk Ve En Büyük Ters Ev'i! Hayata Tersten Bakmaya Ne dersiniz? Tavanda mobilyaların sergilendiği, fotoğraf çekimi için ter...",
  mapImage: require('../../assets/images/mapmockimage.png'),
};

const EventDetail: React.FC<Props> = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const {
    calculateWidth,
    calculateHeight,
    calculateFontSize,
  } = useResponsive();

  const [showFullDescription, setShowFullDescription] = useState(false);
  const event = mockEventData;

  // Açıklama kısaltma fonksiyonu
  const maxDescLength = 110;
  const isLong = event.description.length > maxDescLength;
  const shortDesc = isLong ? event.description.slice(0, maxDescLength) + '...' : event.description;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.greyscale[50] }}>
      {/* Hero Image Section */}
      <View style={{ position: 'relative' }}>
        <Image
          source={event.imageUrl}
          style={{
            width: '100%',
            height: calculateHeight(300),
            resizeMode: 'cover',
          }}
        />
        {/* Back and Favorite Buttons */}
        <View
          style={{
            position: 'absolute',
            top: insets.top + calculateHeight(16),
            left: calculateWidth(16),
            right: calculateWidth(16),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: calculateWidth(44),
              height: calculateWidth(44),
            }}
          >
            <BlurView 
              intensity={4} 
              tint="light" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: calculateWidth(12),
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <View style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: calculateWidth(12),
              }} />
              <Icon name="chevron-left" size={24} color={theme.colors.white} />
            </BlurView>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: calculateWidth(44),
              height: calculateWidth(44),
            }}
          >
            <BlurView 
              intensity={4} 
              tint="light" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: calculateWidth(12),
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <View style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: calculateWidth(12),
              }} />
              <Icon name="heart-outline" size={24} color={theme.colors.white} />
            </BlurView>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: calculateHeight(-50),
            left: calculateWidth(24),
            right: calculateWidth(24),
            width: calculateWidth(327),
            height: calculateHeight(136),
            backgroundColor: 'white',
            borderRadius: calculateWidth(24),
            paddingHorizontal: calculateWidth(20),
            paddingVertical: calculateHeight(20),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: calculateFontSize(20),
              fontWeight: '700',
              color: theme.colors.greyscale[900],
              fontFamily: 'SFProDisplay-Bold',
              marginBottom: calculateHeight(12),
            }}
          >
            {event.title}
          </Text>
          {/* Date Row */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: calculateHeight(8),
            }}
          >
            <Icon name="calendar" size={18} color={theme.colors.greyscale[500]} />
            <Text
              style={{
                fontSize: calculateFontSize(14),
                color: theme.colors.greyscale[600],
                marginLeft: calculateWidth(8),
                fontFamily: 'SFProDisplay-Regular',
              }}
            >
              {event.date} - {event.time}
            </Text>
          </View>
          {/* Location Row with Attendees */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Icon name="map-pin-outline" size={18} color={theme.colors.greyscale[500]} />
              <Text
                style={{
                  fontSize: calculateFontSize(14),
                  color: theme.colors.greyscale[600],
                  marginLeft: calculateWidth(8),
                  fontFamily: 'SFProDisplay-Regular',
                }}
              >
                {event.location}
              </Text>
            </View>
            {/* Attendees */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {event.attendeeAvatars.map((avatar, index) => (
                <Image
                  key={index}
                  source={avatar}
                  style={{
                    width: calculateWidth(28),
                    height: calculateWidth(28),
                    borderRadius: calculateWidth(14),
                    borderWidth: 2,
                    borderColor: theme.colors.white,
                    marginLeft: index > 0 ? -calculateWidth(8) : 0,
                  }}
                />
              ))}
              <View
                style={{
                  width: calculateWidth(28),
                  height: calculateWidth(28),
                  borderRadius: calculateWidth(14),
                  backgroundColor: theme.colors.primary[500],
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: -calculateWidth(8),
                  borderWidth: 2,
                  borderColor: theme.colors.white,
                }}
              >
                <Text
                  style={{
                    fontSize: calculateFontSize(12),
                    fontWeight: '700',
                    color: theme.colors.white,
                    fontFamily: 'SFProDisplay-Bold',
                  }}
                >
                  {event.attendeeCount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: calculateHeight(70),
          paddingHorizontal: calculateWidth(24),
        }}
      >
        {/* Organizer Section */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: calculateHeight(24),
            marginTop: calculateHeight(-14),
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.greyscale[200],
          }}
        >
          <Image
            source={event.organizerLogo}
            style={{
              width: calculateWidth(44),
              height: calculateWidth(44),
              borderRadius: calculateWidth(32),
            }}
          />
          <View style={{ marginLeft: calculateWidth(16), flex: 1 }}>
            <Text
              style={{
                fontSize: calculateFontSize(18),
                fontWeight: '600',
                color: theme.colors.greyscale[900],
                fontFamily: 'SFProDisplay-Semibold',
              }}
            >
              {event.organizerName}
            </Text>
            <Text
              style={{
                fontSize: calculateFontSize(14),
                color: theme.colors.greyscale[500],
                marginTop: calculateHeight(4),
                fontFamily: 'SFProDisplay-Regular',
              }}
            >
              Organizatör
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: calculateFontSize(16),
                fontWeight: '600',
                color: theme.colors.primary[500],
                fontFamily: 'SFProDisplay-Semibold',
                paddingHorizontal: calculateWidth(16),
                paddingVertical: calculateHeight(8),
                borderRadius: calculateWidth(8),
                backgroundColor: theme.colors.primary[50],
              }}
            >
              Takip Et
            </Text>
          </TouchableOpacity>
        </View>
        {/* Description Section */}
        <View 
          style={{ 
            paddingVertical: calculateHeight(24),
          }}
        >
          <Text
            style={{
              fontSize: calculateFontSize(16),
              color: theme.colors.greyscale[700],
              fontWeight: '400',
              lineHeight: calculateFontSize(24),
              fontFamily: 'SFProDisplay-Regular',
            }}
          >
            {showFullDescription || !isLong ? event.description : shortDesc}
            {isLong && !showFullDescription && (
              <Text
                style={{
                  color: theme.colors.primary[500],
                  fontWeight: '600',
                  fontFamily: 'SFProDisplay-Semibold',
                }}
                onPress={() => setShowFullDescription(true)}
              >
                {' '}Devamını oku...
              </Text>
            )}
          </Text>
        </View>
        {/* Map Section */}
        <View style={{ alignItems: 'center', marginBottom: calculateHeight(29) }}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={require('../../assets/images/Map.png')}
              style={{
                width: calculateWidth(327),
                height: calculateHeight(115),
                borderRadius: calculateWidth(16),
                resizeMode: 'cover',
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: -calculateWidth(24),
                marginTop: -calculateHeight(24),
                width: calculateWidth(48),
                height: calculateWidth(48),
                borderRadius: calculateWidth(24),
                backgroundColor: theme.colors.primary[500],
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 8,
              }}
            >
              <Icon name="map-pin" size={24} color={theme.colors.white} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Fixed Bottom Button */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: calculateWidth(24),
          paddingTop: calculateHeight(16),
          paddingBottom: insets.bottom + calculateHeight(24),
        }}
      >
        <Button
          title="Bilet Satın Al"
          onPress={() => {
            console.log('Bilet satın al');
          }}
          variant="primary"
          size="medium"
          fullWidth
        />
      </View>
    </View>
  );
};

export default EventDetail;