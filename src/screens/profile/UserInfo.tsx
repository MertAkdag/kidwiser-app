import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/input';
import { theme } from '../../constants/Colors';
import { NAVIGATORS } from '../../constants/screens';
import { useResponsive } from '../../hooks/useResponsive';
import { RootStackParamList } from '../../navigation/RootNavigator';


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function UserInfo() {
  const navigation = useNavigation<NavigationProp>();
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const insets = useSafeAreaInsets();
  const [fullName, setFullName] = useState('Muhittin Topalak');
  const [phoneNumber, setPhoneNumber] = useState('+90 555 555 55 55');

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={{ height: insets.top, backgroundColor: theme.colors.greyscale[50] }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: calculateWidth(24),
            paddingTop: calculateHeight(16),
            paddingBottom: calculateHeight(24),
            backgroundColor: theme.colors.greyscale[50],
            position: 'relative',
          }}
        >
          <TouchableOpacity
            onPress={handleGoBack}
            style={{
              position: 'absolute',
              left: calculateWidth(24),
              width: calculateWidth(40),
              height: calculateWidth(40),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon
              name="chevron-left"
              size={24}
              color={theme.colors.greyscale[900]}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: calculateFontSize(18),
              fontWeight: '600',
              color: theme.colors.greyscale[900],
              fontFamily: 'SFProDisplay-Bold',
            }}
          >
            Kullanıcı Bilgileri
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: calculateWidth(24),
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: calculateHeight(16),
                marginBottom: calculateHeight(20),
              }}
            >
              <View style={{
                width: calculateWidth(359),
                height: calculateWidth(100),
                borderBottomLeftRadius: calculateWidth(24),
                borderBottomRightRadius: calculateWidth(24),
                marginTop: calculateHeight(-40),
                marginBottom: calculateHeight(-50),
                backgroundColor: theme.colors.greyscale[50],
                zIndex: 1,
              }}>
              </View>

              <View
                style={{
                  position: 'relative',
                  width: calculateWidth(100),
                  height: calculateWidth(100),
                  zIndex: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.15,
                  shadowRadius: 15,
                  elevation: 10,
                }}
              >
                <View
                  style={{
                    width: calculateWidth(100),
                    height: calculateWidth(100),
                    borderRadius: calculateWidth(50),
                    overflow: 'hidden',
                    borderWidth: 3,
                    borderColor: theme.colors.white,
                  }}
                >
                  <Image
                    source={require('../../assets/images/insan1.jpg')}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    resizeMode="cover"
                  />
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: calculateHeight(-1),
                    right: calculateWidth(-10),
                    width: calculateWidth(32),
                    height: calculateWidth(32),
                    borderRadius: calculateWidth(16),
                    borderWidth: 1.5,
                    borderColor: theme.colors.white,
                    backgroundColor: theme.colors.primary[500],
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="camera"
                    size={19}
                    color={theme.colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginBottom: calculateHeight(69), alignItems: 'center' }}>
              <View style={{ marginBottom: calculateHeight(12) }}>
                <Text style={{
                  fontSize: calculateFontSize(14),
                  fontWeight: '500',
                  color: theme.colors.greyscale[600],
                  marginBottom: calculateHeight(12),
                  fontFamily: 'SFProDisplay-Medium',
                }}>
                  İsim Soyisim
                </Text>
                <Input
                  icon="user-outline"
                  value={fullName}
                  onChangeText={setFullName}
                  variant="default"
                />
              </View>

              <View style={{ marginBottom: calculateHeight(16) }}>
                <Text style={{
                  fontSize: calculateFontSize(14),
                  fontWeight: '500',
                  color: theme.colors.greyscale[600],
                  marginBottom: calculateHeight(12),
                  fontFamily: 'SFProDisplay-Medium',
                }}>
                  Telefon
                </Text>
                <Input
                  icon="phone"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  variant="default"
                />
              </View>

              <View>
                <Text style={{
                  fontSize: calculateFontSize(14),
                  fontWeight: '500',
                  color: theme.colors.greyscale[600],
                  marginBottom: calculateHeight(12),
                  fontFamily: 'SFProDisplay-Medium',
                }}>
                  Şifre
                </Text>
                <Input
                  icon="lock"
                  value="******"
                  isPassword={true}
                  variant="default"
                  editable={false}
                />
              </View>
            </View>

            <Button
              title="Değişiklikleri Kaydet"
              variant="primary"
              size="large"
              fullWidth
              onPress={() => {
                navigation.goBack();
              }}
              style={{marginTop: calculateHeight(-9), }}
            />
          </View>

          <View style={{
            alignItems: 'center',
            marginBottom: calculateHeight(5),
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(NAVIGATORS.AUTH_NAVIGATOR)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: calculateHeight(8),
              }}
            >
              <Icon
                name="logout"
                size={24}
                color={theme.colors.greyscale[900]}
                style={{ marginRight: calculateWidth(8) }}
              />
              <Text
                style={{
                  fontSize: calculateFontSize(17),
                  fontWeight: '500',
                  color: theme.colors.greyscale[900],
                  fontFamily: 'SFProDisplay-Medium',
                }}
              >
                Çıkış Yap
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(NAVIGATORS.ONBOARDING_NAVIGATOR)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: calculateHeight(-2),
              }}
            >
              <Icon
                name="trash"
                size={17}
                color={theme.colors.red}
                style={{ marginRight: calculateWidth(8) }}
              />
              <Text
                style={{
                  fontSize: calculateFontSize(14),
                  fontWeight: '500',
                  color: theme.colors.red,
                  fontFamily: 'SFProDisplay-Medium',
                }}
              >
                Hesabı Sil
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}