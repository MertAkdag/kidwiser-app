import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface NewPasswordProps {
  navigation: any;
  route?: any;
}

export default function NewPassword({ navigation, route }: NewPasswordProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangePassword = async () => {
    if (!arePasswordsValid()) return;
    
    setIsLoading(true);
    navigation.navigate(SCREENS.PASSWORD_RESET_SUCCESS);
    
  };

  const arePasswordsValid = () => {
    return newPassword.trim() !== '' && 
           confirmPassword.trim() !== '' && 
           newPassword === confirmPassword;
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
              Yeni Şifre Belirle
            </Text>

            <Text style={{
              fontSize: calculateFontSize(18),
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular',
              color: theme.colors.greyscale[700],
              marginBottom: calculateHeight(40),
            }}>
              Yeni şifreniz daha önce kullandığınız{'\n'}şifrelerden farklı olmalıdır.
            </Text>

            <View style={{ marginTop: calculateHeight(24), marginBottom: calculateHeight(-12) }}>
              <View>
                <Input
                  placeholder="Yeni Şifre"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  isPassword={true}
                  icon="lock"
                  iconColor={theme.colors.greyscale[600]}
                  style={{
                    width: '100%',
                  }}
                />
              </View>

              <View>
                <Input
                  placeholder="Şifreyi tekrar gir"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
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
              title="Şifreyi Değiştir"
              variant="primary"
              size="large"
              onPress={handleChangePassword}
              disabled={!arePasswordsValid() || isLoading}
              fullWidth
              fontFamily="SFProDisplay-Bold"
              fontWeight="700"
              style={{
                marginTop: calculateHeight(24),
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
} 