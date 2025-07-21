import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { useAuth } from '../../hooks/useAuth';
import { useResponsive } from '../../hooks/useResponsive';

interface LoginProps {
  navigation: any;
}

export default function Login({ navigation }: LoginProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const { completeOnboarding } = useAuth();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');


  const handleSocialLogin = (provider: string) => {
    completeOnboarding();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleForgotPassword = () => {
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
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

        <View style={{
          flex: 1,
          paddingHorizontal: calculateWidth(24),
          justifyContent: 'space-between',
          marginTop: calculateHeight(-20),
        }}>
          <View>
            <Text style={{
              fontSize: calculateFontSize(25),
              fontWeight: '600',
              fontFamily: 'SFProDisplay-Bold',
              color: theme.colors.greyscale[900],
              marginBottom: calculateHeight(8),
            }}>
              Yeniden Hoş geldin!
            </Text>

            <Text style={{
              fontSize: calculateFontSize(18),
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular',
              color: theme.colors.greyscale[700],
              marginBottom: calculateHeight(40),
            }}>
              Hesabınla giriş yap.
            </Text>

            <View>
              <Input
                placeholder="Telefon Numaranı Gir"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                icon="phone"
                keyboardType="phone-pad"
                iconColor={theme.colors.greyscale[600]}
                style={{
                  width: '100%',
                }}
              />
            </View>

            <View style={{ marginBottom: calculateHeight(16) }}>
              <Input
                placeholder="Şifre"
                value={password}
                onChangeText={setPassword}
                isPassword={true}
                icon="lock"
                iconColor={theme.colors.greyscale[600]}
                style={{
                  width: '100%',
                }}
              />
            </View>

            <TouchableOpacity 
              onPress={handleForgotPassword}
              style={{
                alignSelf: 'flex-end',
                marginBottom: calculateHeight(32),
              }}
            >
              <Text style={{
                fontSize: calculateFontSize(14),
                fontWeight: '700',
                fontFamily: 'SFProDisplay-Bold',
                color: theme.colors.primary[500],
                marginBottom: calculateHeight(-24),
                marginTop: calculateHeight(-16),
              }}>
                Şifreni mi Unuttun?
              </Text>
            </TouchableOpacity>

            <Button
              title="Giriş Yap"
              variant="primary"
              size="large"
              onPress={() => completeOnboarding()}
              fullWidth
              fontFamily="SFProDisplay-Bold"
              fontWeight="700"
              style={{
                marginBottom: calculateHeight(32),
              }}
            />

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: calculateHeight(24),
            }}>
              <View style={{
                flex: 1,
                height: 1,
                backgroundColor: theme.colors.greyscale[300],
              }} />
              <Text style={{
                marginHorizontal: calculateWidth(16),
                fontSize: calculateFontSize(14),
                fontWeight: '700',
                fontFamily: 'SFProDisplay-Bold',
                color: theme.colors.greyscale[700],
              }}>
                ya da
              </Text>
              <View style={{
                flex: 1,
                height: 1,
                backgroundColor: theme.colors.greyscale[300],
              }} />
            </View>

            <View style={{ marginBottom: calculateHeight(32) }}>
              <Button
                title="Apple ile Giriş Yap"
                variant="social"
                size="large"
                icon="apple"
                onPress={() => handleSocialLogin('Apple')}
                fullWidth
                style={{
                  marginBottom: calculateHeight(16),
                }}
              />

              <Button
                title="Google ile Giriş Yap"
                variant="social"
                size="large"
                icon="google"
                onPress={() => handleSocialLogin('Google')}
                fullWidth
              />
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: calculateHeight(16),
          }}>
            <Text style={{
              fontSize: calculateFontSize(14),
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular',
              color: theme.colors.greyscale[600],

            }}>
              Hesabın yok mu?{' '}
            </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={{
                fontSize: calculateFontSize(14),
                fontWeight: '600',
                fontFamily: 'SFProDisplay-Medium',
                color: theme.colors.primary[500],
              }}>
                Kayıt Ol
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
} 