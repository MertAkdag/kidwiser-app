import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface PasswordResetSuccessProps {
  navigation: any;
}

export default function PasswordResetSuccess({ navigation }: PasswordResetSuccessProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: calculateWidth(24),
        paddingTop: calculateHeight(12),
      }}>
        <TouchableOpacity 
          onPress={() => navigation.navigate(SCREENS.LOGIN)}
          style={{
            width: calculateWidth(14),
            height: calculateWidth(14),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon 
            name="x" 
            size={calculateWidth(14)} 
            color={theme.colors.greyscale[900]} 
          />
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        paddingHorizontal: calculateWidth(24),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calculateHeight(-20),
      }}>
        <View style={{
          alignItems: 'center',
          marginBottom: calculateHeight(48),
        }}>
          <View style={{
            marginBottom: calculateHeight(32),
          }}>
            <Image 
              source={require('../../assets/images/passillustration.png')}
              style={{
                width: calculateWidth(200),
                height: calculateWidth(200),
              }}
              resizeMode="contain"
            />
          </View>

          <Text style={{
            fontSize: calculateFontSize(28),
            fontWeight: '700',
            fontFamily: 'SFProDisplay-Bold',
            color: theme.colors.greyscale[900],
            textAlign: 'center',
            marginBottom: calculateHeight(8),
          }}>
            Şifren Değiştirildi
          </Text>

          <Text style={{
            fontSize: calculateFontSize(18),
            fontWeight: '400',
            fontFamily: 'SFProDisplay-Regular',
            color: theme.colors.greyscale[600],
            textAlign: 'center',
            lineHeight: calculateHeight(24),
          }}>
            Şifreniz başarılı bir şekilde değiştirildi.{'\n'}Yeni şifrenizle giriş yapabilirsiniz.
          </Text>
        </View>
      </View>

      <View style={{
        paddingHorizontal: calculateWidth(24),
        paddingBottom: calculateHeight(32),
      }}>
        <Button
          title="Giriş Yap"
          variant="primary"
          size="large"
          onPress={() => navigation.navigate(SCREENS.LOGIN)}
          fullWidth
          fontFamily="SFProDisplay-Bold"
          fontWeight="700"
        />
      </View>
    </SafeAreaView>
  );
} 