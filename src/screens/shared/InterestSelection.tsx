import { useNavigation } from '@react-navigation/native';
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
import Icon from '../../components/icon/Icon';
import { theme } from '../../constants/Colors';
import { NAVIGATORS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface InterestCategory {
  id: string;
  name: string;
  image: any;
  eventCount: string;
}

interface InterestSelectionProps {
  mode?: 'onboarding' | 'profile';
  initialInterests?: string[];
  onComplete?: (interests: string[]) => void;
  onCancel?: () => void;
}

const INTEREST_CATEGORIES: InterestCategory[] = [
  {
    id: 'craft',
    name: 'El işi',
    image: require('../../assets/images/MaskGroup-6.png'),
    eventCount: '233 etkinlik',
  },
  {
    id: 'entertainment',
    name: 'Eğlence',
    image: require('../../assets/images/MaskGroup-5.png'),
    eventCount: '4938 etkinlik',
  },
  {
    id: 'music',
    name: 'Müzik',
    image: require('../../assets/images/MaskGroup-4.png'),
    eventCount: '342 etkinlik',
  },
  {
    id: 'dance',
    name: 'Dans',
    image: require('../../assets/images/MaskGroup-3.png'),
    eventCount: '190 etkinlik',
  },
  {
    id: 'education',
    name: 'Eğitim',
    image: require('../../assets/images/MaskGroup-2.png'),
    eventCount: '126 etkinlik',
  },
  {
    id: 'sport',
    name: 'Spor',
    image: require('../../assets/images/image4x.png'),
    eventCount: '59 etkinlik',
  },
];

export default function InterestSelection({
  mode = 'onboarding',
  initialInterests = [],
  onComplete,
  onCancel,
}: InterestSelectionProps) {
  const navigation = useNavigation();
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(initialInterests);

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(selectedInterests);
    } else {
      (navigation as any).navigate(NAVIGATORS.TAB_NAVIGATOR);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigation.goBack();
    }
  };

  const getTitle = () => {
    return mode === 'profile' ? 'İlgi Alanlarını Güncelle' : 'İlgi Alanlarını Seç';
  };

  const getButtonTitle = () => {
    return mode === 'profile' ? 'Kaydet' : 'Tamamla';
  };

  const renderInterestCard = (interest: InterestCategory) => {
    const isSelected = selectedInterests.includes(interest.id);
    
    return (
      <TouchableOpacity
        key={interest.id}
        style={{
          width: '48%',
          height: calculateHeight(180),
          backgroundColor: theme.colors.white,
          borderRadius: calculateWidth(16),
          padding: calculateWidth(12),
          marginBottom: calculateHeight(16),
          borderWidth: 2,
          borderColor: isSelected ? theme.colors.primary[500] : 'transparent',
          position: 'relative',
        }}
        onPress={() => handleInterestToggle(interest.id)}
        activeOpacity={0.9}
      >
        {isSelected && (
          <View
            style={{
              position: 'absolute',
              top: calculateWidth(18),
              right: calculateWidth(18),
              width: calculateWidth(20),
              height: calculateWidth(20),
              backgroundColor: theme.colors.white,
              borderRadius: calculateWidth(12),
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <Icon
              name="check"
              size={16}
              color={theme.colors.green}
            />
          </View>
        )}
        
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ position: 'relative' }}>
            <Image
              source={interest.image}
              style={{
                width: '100%',
                height: calculateHeight(100),
                borderRadius: calculateWidth(12),
              }}
              resizeMode="cover"
            />
            {isSelected && (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: theme.colors.primary[500],
                  borderRadius: calculateWidth(12),
                  opacity: 0.5,
                }}
              />
            )}
          </View>
          
          <View style={{ marginTop: calculateHeight(8) }}>
            <Text
              style={{
                fontSize: calculateFontSize(16),
                fontWeight: '600',
                color: theme.colors.greyscale[900],
                fontFamily: 'SFProDisplay-Medium',
                marginBottom: calculateHeight(2),
                textAlign: 'center',
              }}
            >
              {interest.name}
            </Text>
            
            <Text
              style={{
                fontSize: calculateFontSize(12),
                color: theme.colors.greyscale[600],
                fontFamily: 'SFProDisplay-Regular',
                opacity: 0.8,
                textAlign: 'center',
              }}
            >
              {interest.eventCount}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.greyscale[50] }}>
      <View
        style={{
          backgroundColor: theme.colors.greyscale[50],
          paddingHorizontal: calculateWidth(24),
          paddingTop: calculateHeight(16),
          paddingBottom: calculateHeight(24),
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={handleCancel}
          style={{
            padding: calculateWidth(8),
          }}
        >
          <Icon
            name="chevron-left"
            size={24}
            color={theme.colors.greyscale[900]}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1, paddingHorizontal: calculateWidth(24) }}
        contentContainerStyle={{
          paddingBottom: calculateHeight(100),
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: calculateFontSize(24),
            fontWeight: '700',
            color: theme.colors.greyscale[900],
            fontFamily: 'SFProDisplay-Bold',
            marginBottom: calculateHeight(8),
          }}
        >
          {getTitle()}
        </Text>
        
        <Text
          style={{
            fontSize: calculateFontSize(14),
            color: theme.colors.greyscale[600],
            fontFamily: 'SFProDisplay-Regular',
            lineHeight: calculateHeight(20),
            marginBottom: calculateHeight(24),
          }}
        >
          İlgi alanınızı seçin, böylece ilgilendiğiniz tüm yeni programları size önerebileceğiz.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {INTEREST_CATEGORIES.map((interest) => renderInterestCard(interest))}
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: theme.colors.greyscale[50],
          paddingHorizontal: calculateWidth(24),
          paddingBottom: calculateHeight(40),
          paddingTop: calculateHeight(16),
        }}
      >
        <Button
          title={getButtonTitle()}
          variant='primary'
          fullWidth
          disabled={selectedInterests.length === 0}
          style={selectedInterests.length === 0 ? {
            height: calculateHeight(56),
            backgroundColor: theme.colors.greyscale[400],
          } : {
            height: calculateHeight(56),
            backgroundColor: theme.colors.primary[500],
          }}
          onPress={handleComplete}
        />
      </View>
    </SafeAreaView>
  );
} 