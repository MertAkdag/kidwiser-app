import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { PrimaryButton } from '../../components/button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { SCREENS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';

interface ForgotPasswordVerificationProps {
  navigation?: any;
  route?: any;
}

export default function ForgotPasswordVerification({ navigation, route }: ForgotPasswordVerificationProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const resetMethod = route?.params?.resetMethod || 'email';
  const contact = route?.params?.contact || '';

  const getContactDisplay = () => {
    if (resetMethod === 'email') {
      return contact;
    }
  };

  const getMethodText = () => {
    return resetMethod === 'email' ? 'e-posta adresine' : 'telefon numaranıza';
  };

  const handleCodeChange = (value: string) => {
    setCode(value);
    setError(false);
  };

  const handleSubmit = async () => {
    if (code.length === 0) {
      setError(true);
      return;
    }
    
    if (code.length !== 4) {
      setError(true);
      return;
    }
    
    setIsLoading(true);
    navigation?.navigate(SCREENS.NEW_PASSWORD, { resetMethod, contact, verificationCode: code });
    
  };

  const handleResend = () => {
    console.log(contact);
  };

  const handleBackPress = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme.colors.white,
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: calculateWidth(24),
        paddingTop: calculateHeight(16),
        paddingBottom: calculateHeight(32),
      }}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={{
            width: calculateWidth(40),
            height: calculateWidth(40),
            borderRadius: calculateWidth(8),
            backgroundColor: theme.colors.greyscale[50],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon 
            name="chevron-left" 
            size={calculateWidth(20)} 
            color={theme.colors.greyscale[700]} 
          />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          paddingHorizontal: calculateWidth(24),
        }}
      >
        <Text style={{
          fontSize: calculateFontSize(28),
          fontWeight: '700',
          fontFamily: 'SFProDisplay-Bold',
          color: theme.colors.greyscale[900],
          textAlign: 'left',
          marginBottom: calculateHeight(8),
          marginTop: calculateHeight(-20),
        }}>
          Doğrulama Kodu
        </Text>

        <Text style={{
          fontSize: calculateFontSize(18),
          fontWeight: '400',
          fontFamily: 'SFProDisplay-Regular',
          color: theme.colors.greyscale[600],
          textAlign: 'left',
          lineHeight: calculateHeight(24),
          marginBottom: calculateHeight(32),
        }}>
          {getMethodText()} gönderdiğimiz{'\n'}doğrulama kodunu aşağıya girin.
        </Text>

        <View style={{
          alignItems: 'center',
          marginBottom: calculateHeight(24),
        }}>
          <Input
            value={code}
            onChangeText={handleCodeChange}
            error={error}
            autoFocus={true}
            variant="pin"
            length={4}
          />
        </View>

        <View style={{
          alignItems: 'center',
        }}>
          <TouchableOpacity
            onPress={handleResend}
            style={{
              paddingVertical: calculateHeight(12),
              paddingHorizontal: calculateWidth(16),
            }}
            activeOpacity={0.7}
          >
            <Text style={{
              fontSize: calculateFontSize(16),
              fontWeight: '600',
              fontFamily: 'SFProDisplay-Medium',
              color: theme.colors.primary[500],
              textAlign: 'center',
              marginTop: calculateHeight(-24),
            }}>
              Kodu Tekrar Gönder
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={-18}
      >
        <View style={{
          paddingHorizontal: calculateWidth(24),
          paddingBottom: calculateHeight(32),
          paddingTop: calculateHeight(16),
          backgroundColor: theme.colors.white,
        }}>
          <PrimaryButton
            title="Devam Et"
            onPress={handleSubmit}
            disabled={isLoading}
            fullWidth
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} 