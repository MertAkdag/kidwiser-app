import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Button from '../../components/button/Button';
import { theme } from '../../constants/Colors';
import { useAuth } from '../../hooks/useAuth';
import { useResponsive } from '../../hooks/useResponsive';

export default function Welcome() {
  const { completeOnboarding } = useAuth();
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  const handleStart = () => {
    completeOnboarding();
  };

  const handleSocialStart = (provider: string) => {
    completeOnboarding();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <View style={{
        width: '100%',
        height: '40%',
        position: 'relative'
      }}>
        <Image
          source={require('../../assets/images/welcomeimage.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
          }}
        />
        
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.88)', 'rgb(255, 255, 255)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%', 
          }}
        />
      </View>

      <View style={{ 
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: calculateWidth(24),
        marginTop: calculateHeight(-40),
        paddingBottom: calculateHeight(34),
      }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontSize: calculateFontSize(30),
            fontWeight: '600',
            color: theme.text.primary,
            textAlign: 'center',
            marginBottom: calculateHeight(12)
          }}>
            Haydi Başlayalım
          </Text>

          <Text style={{
            fontSize: calculateFontSize(15),
            color: theme.text.secondary,
            textAlign: 'center',
            lineHeight: calculateHeight(24),
            marginBottom: calculateHeight(40),
            fontWeight: '400'
          }}>
            Yakınızda neler olduğunu görmek için{'\n'}kaydolun veya giriş yapın
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Button
              title="Email ile Devam Et"
              variant="primary"
              size="medium"
              onPress={handleStart}
              fullWidth
              style={{ 
                backgroundColor: theme.colors.primary[500],
                elevation: 0,
                marginBottom: calculateHeight(12)
              }}
            />

            <Button
              title="Apple ile Devam Et"
              variant="social"
              size="medium"
              icon="apple"
              onPress={() => handleSocialStart('Apple')}
              fullWidth
              style={{ 
                marginBottom: calculateHeight(12),
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2
              }}
            />

            <Button
              title="Google ile Devam Et"
              variant="social"
              size="medium"
              icon="google"
              onPress={() => handleSocialStart('Google')}
              fullWidth
              style={{ 
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2
              }}
            />
          </View>

          <Text style={{
            fontSize: calculateFontSize(12),
            color: theme.colors.greyscale[700],
            fontWeight: '400',
            textAlign: 'center',
            lineHeight: calculateHeight(18),
            marginBottom: calculateHeight(-26),
          }}>
            Kaydolarak veya giriş yaparak Kidswiser{' '}
            <Text style={{ color: theme.colors.primary[500], fontWeight: '600' }}>
              Hizmet Koşullarını
            </Text>
            {' '}ve{' '}
            <Text style={{ color: theme.colors.primary[500], fontWeight: '600' }}>
              Gizlilik Politikasını
            </Text>
            {' '}kabul ediyorum.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}