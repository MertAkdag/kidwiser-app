import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface ResetPasswordPhoneProps {
  navigation: any;
}

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');

  let formattedDigits = digits;
  if (digits.length > 0 && !digits.startsWith('0')) {
    formattedDigits = '0' + digits;
  }
  
  
  if (formattedDigits.length > 11) {
    formattedDigits = formattedDigits.slice(0, 11);
  }
  
  
  if (formattedDigits.length <= 1) {
    return formattedDigits;
  } else if (formattedDigits.length <= 4) {
    return `${formattedDigits[0]} (${formattedDigits.slice(1)}`;
  } else if (formattedDigits.length <= 7) {
    return `${formattedDigits[0]} (${formattedDigits.slice(1, 4)}) ${formattedDigits.slice(4)}`;
  } else if (formattedDigits.length <= 9) {
    return `${formattedDigits[0]} (${formattedDigits.slice(1, 4)}) ${formattedDigits.slice(4, 7)} ${formattedDigits.slice(7)}`;
  } else {
    return `${formattedDigits[0]} (${formattedDigits.slice(1, 4)}) ${formattedDigits.slice(4, 7)} ${formattedDigits.slice(7, 9)} ${formattedDigits.slice(9)}`;
  }
};

const getApiPhoneNumber = (formattedPhone: string): string => {
  const digits = formattedPhone.replace(/\D/g, '');
  
  if (digits.startsWith('0')) {
    return '90' + digits.slice(1);
  }
  
  return '90' + digits;
};

export default function ResetPasswordPhone({ navigation }: ResetPasswordPhoneProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    const formatted = formatPhoneNumber(digitsOnly);
    setPhoneNumber(formatted);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendCode = () => {
    if (isPhoneValid()) {
      const apiPhoneNumber = getApiPhoneNumber(phoneNumber);
      console.log(apiPhoneNumber);
      
      navigation.navigate(SCREENS.FORGOT_PASSWORD_VERIFICATION, { resetMethod: 'phone', contact: apiPhoneNumber });
    }
  };

  const isPhoneValid = () => {
    const digits = phoneNumber.replace(/\D/g, '');
    return digits.length === 11;
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
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Icon 
              name="chevron-left" 
              size={calculateWidth(24)} 
              color={theme.colors.greyscale[900]} 
            />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          style={{
            flex: 1,
            paddingHorizontal: calculateWidth(24),
            marginTop: calculateHeight(-20),
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: calculateFontSize(25),
              fontWeight: '600',
              fontFamily: 'SFProDisplay-Bold',
              color: theme.colors.greyscale[900],
              marginBottom: calculateHeight(8),
            }}>
              Şifreni Sıfırla
            </Text>

            <Text style={{
              fontSize: calculateFontSize(18),
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular',
              color: theme.colors.greyscale[700],
              marginBottom: calculateHeight(40),
            }}>
              Lütfen telefon numaranızı girin.{'\n'}Size bir doğrulama kodu göndereceğiz.
            </Text>

            <View style={{ marginBottom: calculateHeight(32) }}>
              <Input
                placeholder="Telefon Numaranı Gir"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                icon="phone"
                keyboardType="phone-pad"
                iconColor={theme.colors.greyscale[600]}
                maxLength={18}
                style={{
                  width: '100%',
                }}
              />
            </View>
          </View>

          <View style={{
            paddingBottom: calculateHeight(32),
          }}>
            <Button
              title="Doğrulama Kodu Gönder"
              variant="primary"
              size="large"
              onPress={handleSendCode}
              disabled={!isPhoneValid()}
              fullWidth
              fontFamily="SFProDisplay-Bold"
              fontWeight="700"
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
} 