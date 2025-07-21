import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useAuth } from '../../hooks/useAuth';
import { useResponsive } from '../../hooks/useResponsive';

interface RegisterProps {
  navigation: any;
}

export default function Register({ navigation }: RegisterProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const { completeOnboarding } = useAuth();
  
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const areAllFieldsFilled = () => {
    return fullName.trim() !== '' && phoneNumber.trim() !== '' && password.trim() !== '';
  };

  const handleRegister = () => {
    if (areAllFieldsFilled()) {
      navigation.navigate(SCREENS.VERIFICATION_CODE);
    }
  };

  const handleSocialRegister = (provider: string) => {
    completeOnboarding();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.goBack();
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
              alignItems: 'center',
              backgroundColor: theme.colors.greyscale[50],
              borderRadius: calculateWidth(8),
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
              Kayıt Ol
            </Text>

            <View style={{ marginTop: calculateHeight(24), marginBottom: calculateHeight(-12) }}>
              <View>
                <Input
                  placeholder="İsim Soyisim"
                  value={fullName}
                  onChangeText={setFullName}
                  icon="user-outline"
                  iconColor={theme.colors.greyscale[600]}
                  style={{
                    width: '100%',
                  }}
                />
              </View>

              <View>
                <Input
                  placeholder="Telefon"
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

              <View>
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
            </View>

            <Button
              title="Kayıt Ol"
              variant="primary"
              size="large"
              onPress={handleRegister}
              disabled={!areAllFieldsFilled()}
              fullWidth
              fontFamily="SFProDisplay-Bold"
              fontWeight="700"
              style={{
                marginTop: calculateHeight(24),
                marginBottom: calculateHeight(24),
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
                title="Apple ile Kayıt Ol"
                variant="social"
                size="large"
                icon="apple"
                onPress={() => handleSocialRegister('Apple')}
                fullWidth
                style={{
                  marginBottom: calculateHeight(16),
                }}
              />

              <Button
                title="Google ile Kayıt Ol"
                variant="social"
                size="large"
                icon="google"
                onPress={() => handleSocialRegister('Google')}
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
              Hesabın var mı?{' '}
            </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={{
                fontSize: calculateFontSize(14),
                fontWeight: '600',
                fontFamily: 'SFProDisplay-Medium',
                color: theme.colors.primary[500],
              }}>
                Giriş Yap
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
} 