import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../components/button/Button';
import { ResetPasswordCard } from '../../components/card/card';
import Icon from '../../components/icon/Icon';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface ForgotPasswordProps {
  navigation: any;
}

export default function ForgotPassword({ navigation }: ForgotPasswordProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [selectedMethod, setSelectedMethod] = useState<'email' | 'phone' | null>(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEmailReset = () => {
    setSelectedMethod('email');
    navigation.navigate(SCREENS.RESET_PASSWORD_EMAIL);
  };

  const handlePhoneReset = () => {
    setSelectedMethod('phone');
    navigation.navigate(SCREENS.RESET_PASSWORD_PHONE);
  };

  const handleContinue = () => {
    if (selectedMethod === 'email') {
      navigation.navigate(SCREENS.RESET_PASSWORD_EMAIL);
    } else if (selectedMethod === 'phone') {
      navigation.navigate(SCREENS.RESET_PASSWORD_PHONE);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: calculateWidth(24),
          paddingTop: calculateHeight(16),
          paddingBottom: calculateHeight(32),
        }}>
          <TouchableOpacity 
            onPress={handleGoBack}
            style={{
              width: calculateWidth(40),
              height: calculateWidth(40),
              justifyContent: 'center',
              backgroundColor: theme.colors.greyscale[50],
              borderRadius: calculateWidth(8),
              alignItems: 'center',
            }}
          >
            <Icon 
              name="chevron-left" 
              size={calculateWidth(24)} 
              color={theme.colors.greyscale[900]} 
            />
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 1,
          paddingHorizontal: calculateWidth(24),
          marginTop: calculateHeight(-20),
        }}>
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: calculateFontSize(25),
              fontWeight: '600',
              fontFamily: 'SFProDisplay-Bold',
              color: theme.colors.greyscale[900],
              marginBottom: calculateHeight(8),
            }}>
              Şifremi Unuttum
            </Text>

            <Text style={{
              fontSize: calculateFontSize(18),
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular',
              color: theme.colors.greyscale[700],
              marginBottom: calculateHeight(40),
            }}>
            Şifrenizi sıfırlamak için hangi iletişim bilgilerini kullanmamızı istersiniz?
            </Text>

            <View style={{ marginTop: calculateHeight(24), marginBottom: calculateHeight(32) }}>
              <ResetPasswordCard 
                title="E-posta"
                subtitle="mer****@gmail.com"
                icon="mail"
                selected={selectedMethod === 'email'}
                fullWidth
                onPress={() => setSelectedMethod('email')}
                style={{
                  marginBottom: calculateHeight(16),
                }}
              />

              <ResetPasswordCard 
                title="Telefon Numarası"
                subtitle="+90 *******8988"
                icon="phone"
                selected={selectedMethod === 'phone'}
                fullWidth
                onPress={() => setSelectedMethod('phone')}
              />
            </View>
          </View>

          <View style={{ paddingBottom: calculateHeight(24) }}>
            <Button
              title="Devam Et"
              variant="primary"
              size="large"
              onPress={handleContinue}
              disabled={!selectedMethod}
              fullWidth
              fontFamily="SFProDisplay-Bold"
              fontWeight="700"
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
} 