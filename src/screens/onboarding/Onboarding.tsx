import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/button/Button';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ONBOARDING_DATA = [
  {
    id: 1,
    title: 'Yakınınızdaki en iyi\netkinlikleri bulun',
    description: 'Çevrenizden en güzel çocuk etkinliklerini,\ntiyatroları, oyunları birlikte bulalım.'
    },
  {
    id: 2,
    title: 'Sıradışı eğlenceleri bizimle\nkeşfedin',
    description: 'Çevrenizden en güzel çocuk etkinliklerini,\ntiyatroları, oyunları birlikte bulalım.',
  },  
];

export default function Onboarding() {
  const navigation = useNavigation();
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSkip = () => {
    navigation.navigate(SCREENS.ONBOARDING_WELCOME as never);
  };

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * SCREEN_WIDTH,
        animated: true
      });
    } else {
      navigation.navigate(SCREENS.ONBOARDING_WELCOME as never);
    }
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(pageNum);
  };

  const renderIllustration = (item: typeof ONBOARDING_DATA[0]) => {
        if (item.id === 1) {
      return (
        <Image
          source={require('../../assets/images/image-onboard.png')}
          style={{
            backgroundColor: '#fff', 
            width: calculateWidth(298),
            height: calculateHeight(389),
            marginTop: calculateHeight(-50),
            marginBottom: calculateHeight(48),
            marginLeft: calculateWidth(-30),
            resizeMode: 'contain',
            transform: [{ scale: 1.3 }],
          
          }}
        />
      );
    }
  };

  const renderSlide = (item: typeof ONBOARDING_DATA[0]) => (
    <View key={item.id} style={{ width: SCREEN_WIDTH, position: 'relative' }}>
      {item.id === 2 && (
        <Image
          source={require('../../assets/images/img.png')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: SCREEN_WIDTH,
            height: '105%'
          }}
          resizeMode="cover"
        />
      )}
      
      
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: calculateWidth(12),
        zIndex: 2
      }}>
        {item.id === 1 ? (
          renderIllustration(item)
        ) : (
          <View style={{
            width: calculateWidth(420),
            height: calculateHeight(350),
            borderRadius: calculateWidth(24),
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: calculateHeight(48),
          }}>
            {renderIllustration(item)}
          </View>
        )}

        <Text style={{
          fontSize: calculateFontSize(28),
          fontWeight: '700',
          color: theme.text.primary,
          textAlign: 'center',
          marginBottom: calculateHeight(16),
          lineHeight: calculateHeight(36),

        }}>
          {item.title}
        </Text>

        <Text style={{
          fontSize: calculateFontSize(16),
          color: theme.text.secondary,
          textAlign: 'center',
          lineHeight: calculateHeight(24),
          marginBottom: calculateHeight(48),
        }}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  const renderPaginationDots = () => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: calculateHeight(24),
      backgroundColor: 'transparent'
    }}>
      {ONBOARDING_DATA.map((_, index) => (
        <View
          key={index}
          style={{
            width: index === currentIndex ? calculateWidth(32) : calculateWidth(32),
            height: calculateHeight(4),
            backgroundColor: index === currentIndex 
              ? theme.colors.primary[500] 
              : theme.colors.greyscale[300],
            borderRadius: calculateHeight(4),
            marginHorizontal: calculateWidth(4)
          }}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ 
        alignItems: 'flex-end', 
        paddingHorizontal: calculateWidth(24),
        paddingTop: calculateHeight(16)
      }}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={{
            fontSize: calculateFontSize(16),
            color: theme.colors.greyscale[900],
            fontWeight: '500'
          }}>
            Atla
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        {ONBOARDING_DATA.map(renderSlide)}
      </ScrollView>

      <View style={{ 
        paddingHorizontal: calculateWidth(24),
        paddingBottom: calculateHeight(32)
      }}>
        {renderPaginationDots()}

        <Button
          title={currentIndex === ONBOARDING_DATA.length - 1 ? 'Başlayalım' : 'Devam Et'}
          variant="primary"
          size="medium"
          onPress={handleNext}
          fullWidth
        />
      </View>
    </SafeAreaView>
  );
} 