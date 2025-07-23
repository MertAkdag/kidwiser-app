import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface ResetPasswordEmailProps {
  navigation: any;
}

export default function ResetPasswordEmail({ navigation }: ResetPasswordEmailProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [email, setEmail] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendCode = () => {
    if (email.trim()) {
      navigation.navigate(SCREENS.FORGOT_PASSWORD_VERIFICATION, { resetMethod: 'email', contact: email });
    }
  };

  const isEmailValid = () => {
    return email.trim() !== '' && email.includes('@');
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
              Lütfen eposta adresinizi aşağıya girin. Size bir doğrulama kodu göndereceğiz.            </Text>

            <View style={{ marginBottom: calculateHeight(32) }}>
              <Input
                placeholder="mer******@gmail.com"
                value={email}
                onChangeText={setEmail}
                icon="mail"
                keyboardType="email-address"
                iconColor={theme.colors.greyscale[600]}
                autoCapitalize="none"
                autoCorrect={false}
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
              disabled={!isEmailValid()}
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