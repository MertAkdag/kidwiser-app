import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../../components/button/Button';
import SearchFilter, { FilterState } from '../../components/filter';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { NAVIGATORS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';
import { RootStackParamList } from '../../navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface SearchEventData {
  id: string;
  title: string;
  date: string;
  time: string;
  imageUrl: any;
  category: string;
  location: string;
  price: number;
}

const searchEvents: SearchEventData[] = [
  {
    id: '1',
    title: 'Karlar Ülkesi \nÇocuk Oyunu',
    date: '10 kasım 2026',
    time: '15.30',
    imageUrl: require('../../assets/images/image.png'),
    category: 'Tümü',
    location: 'Antalya',
    price: 50,
  },
  {
    id: '2',
    title: 'Onur Erol Konseri',
    date: '12 Haziran 2026',
    time: '17.00',
    imageUrl: require('../../assets/images/image-1.png'),
    category: 'Müzik',
    location: 'Antalya',
    price: 80,
  },
  {
    id: '3',
    title: 'Susam Sokağı "Kurabiye Operasyonu"',
    date: '13 Haziran 2026',
    time: '20.00',
    imageUrl: require('../../assets/images/image-2.png'),
    category: 'Tümü',
    location: 'Antalya',
    price: 65,
  },
  {
    id: '4',
    title: 'Sermet Erkin - Çocuklar için İnteraktif İllüzyon...',
    date: '19 Eylül 2026',
    time: '18.00',
    imageUrl: require('../../assets/images/image-3.png'),
    category: 'Tümü',
    location: 'Antalya',
    price: 90,
  },
  {
    id: '5',
    title: 'Pizza Workshop',
    date: '19 Ağustos 2026',
    time: '18.00',
    imageUrl: require('../../assets/images/image-4.png'),
    category: 'El İşi',
    location: 'Antalya',
    price: 45,
  },
];

export default function Search() {
  const navigation = useNavigation<NavigationProp>();
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [searchText, setSearchText] = useState('');
  
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    location: 'Antalya',
    category: 'all',
    date: '',
    priceRange: { min: 40, max: 120 },
  });

  const handleEventPress = (eventId: string, eventTitle: string) => {
    navigation.navigate(NAVIGATORS.EVENT_NAVIGATOR, {
      screen: 'EventDetail',
      params: {
        eventId,
        eventTitle,
      },
    } as any);
  };

  const handleFilterApply = (newFilters: FilterState) => {
    setFilters(newFilters);
  };


  const normalizeDate = (dateString: string): string => {
    if (!dateString) return '';
    const parts = dateString.trim().split(' ');
    if (parts.length === 3) {
              const day = parts[0].padStart(2, '0');
      const month = parts[1];
      const year = parts[2];
      return `${day} ${month} ${year}`;
    }
    

    return dateString;
  };

  const filterEvents = () => {
    return searchEvents.filter(event => {

      if (searchText && !event.title.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }

      if (filters.location !== 'Antalya' && event.location !== filters.location) {
        return false;
      }
      

      if (filters.category !== 'all') {
        const categoryMap: { [key: string]: string } = {
          'music': 'Müzik',
          'handmade': 'El İşi', 
          'sport': 'Spor',
        };
        
        const filterCategoryName = categoryMap[filters.category] || filters.category;
        if (event.category !== filterCategoryName && event.category !== 'Tümü') {
          return false;
        }
      }
      
      if (filters.date) {
        const normalizedFilterDate = normalizeDate(filters.date);
        const normalizedEventDate = normalizeDate(event.date);
        
        if (normalizedFilterDate !== normalizedEventDate) {
          return false;
        }
      }
      
      if (event.price < filters.priceRange.min || event.price > filters.priceRange.max) {
        return false;
      }

      return true;
    });
  };

  const filteredEvents = filterEvents();

  const renderEventCard = (event: SearchEventData) => {
    return (
      <TouchableOpacity
        key={event.id}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.white,
          marginHorizontal: calculateWidth(24),
          marginBottom: calculateHeight(16),
          borderRadius: calculateWidth(16),
          padding: calculateWidth(12),
          width: calculateWidth(327),
          height: calculateHeight(96),
         }}
        onPress={() => handleEventPress(event.id, event.title)}
        activeOpacity={0.8}
      >

        <View
          style={{
            width: calculateWidth(80),
            height: calculateWidth(80),
            borderRadius: calculateWidth(12),
            overflow: 'hidden',
            marginRight: calculateWidth(16),
          }}
        >
          <Image
            source={event.imageUrl}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover"
          />
        </View>


        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: calculateFontSize(12),
              color: theme.colors.primary[500],
              fontFamily: 'SFProDisplay-Medium',
              marginBottom: calculateHeight(4),
            }}
          >
            {event.date} - {event.time}
          </Text>
          <Text
            style={{
              fontSize: calculateFontSize(16),
              fontWeight: '600',
              color: theme.colors.greyscale[900],
              fontFamily: 'SFProDisplay-Medium',
              lineHeight: calculateHeight(20),
            }}
            numberOfLines={2}
          >
            {event.title}
          </Text>
        </View>


        <TouchableOpacity
          style={{
            padding: calculateWidth(8),
            marginBottom: calculateHeight(36),
          }}
          onPress={() => {}}
        >

          <Icon
            name="heart-outline"
            size={24}
            color={theme.colors.greyscale[400]}
          />

        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      
      <View
        style={{
          backgroundColor: theme.colors.white,
          paddingHorizontal: calculateWidth(24),
          paddingTop: calculateHeight(16),
          paddingBottom: calculateHeight(16),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: theme.colors.greyscale[900],
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: calculateWidth(8),
            backgroundColor: theme.colors.greyscale[50],
            borderRadius: calculateWidth(12),
            marginLeft: -calculateWidth(8),
          }}
        >
          <Icon
            name="chevron-left"
            size={24}
            color={theme.colors.greyscale[900]}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: calculateFontSize(18),
            fontWeight: '600',
            color: theme.colors.greyscale[900],
            fontFamily: 'SFProDisplay',
            flex: 1,
            textAlign: 'center',
            marginRight: calculateWidth(32),
          }}
        >
          Etkinlik Ara
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.greyscale[50],
          borderTopLeftRadius: calculateWidth(44),
          borderTopRightRadius: calculateWidth(44),
        }}
      >

        <View
          style={{
            paddingHorizontal: calculateWidth(24),
            paddingTop: calculateHeight(24),
            paddingBottom: calculateHeight(16),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: calculateWidth(12),
            }}
          >
            <View style={{ flex: 1, marginBottom: calculateHeight(-16) }}>
              <Input
                variant="search"
                placeholder="Etkinlik ara..."
                value={searchText}
                onChangeText={setSearchText}
                style={{
                  width: calculateWidth(85),
                  height: calculateHeight(22),
                }}
              />
            </View>
            
            <TouchableOpacity
              style={{
                width: calculateWidth(56),
                height: calculateWidth(56),
                backgroundColor: theme.colors.white,
                borderRadius: calculateWidth(12),
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: theme.colors.greyscale[200],
              }}
              onPress={() => setFilterVisible(true)}
            >
              <Icon
                name="filter"
                size={28}
                color={theme.colors.primary[500]}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: calculateHeight(16) }}>
            <Button
              title="Haritada Göster"
              variant="secondary"
              icon="map-pin-outline"
              iconSize={20}
              iconPosition="left"
              iconColor={theme.colors.primary[500]}
              fontWeight="500"
              style={{
                alignSelf: 'center',
                width: calculateWidth(327),
                height: calculateHeight(48),
                paddingHorizontal: calculateWidth(24),
              }}
            />
          </View>
        </View>

        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: calculateHeight(8),
            paddingBottom: calculateHeight(24),
          }}
        >
          {filteredEvents.map((event) => renderEventCard(event))}
        </ScrollView>
      </View>

      <SearchFilter
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        onApply={handleFilterApply}
        currentFilters={filters}
      />
    </SafeAreaView>
  );
} 