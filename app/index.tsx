import { useFonts } from 'expo-font';
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import '../global.css';
import {
  PaymentButton,
  PrimaryButton,
  SecondaryButton,
  SocialButton
} from '../src/components/button/index';
import Input from '../src/components/input/input';
import { useResponsive } from '../src/hooks/useResponsive';
import '../tailwind.config';

export default function Index() {
  const { calculateFontSize, calculateHeight } = useResponsive();

  const [fontsLoaded] = useFonts({
    'SFProDisplay-Regular': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYREGULAR.ttf'),
    'SFProDisplay-Bold': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYBOLD.ttf'),
    'SFProDisplay-Medium': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYSEMIBOLDITALIC.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
    >
      <ScrollView 
        style={{ flex: 1, backgroundColor: 'white' }}
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 40
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text 
          className="text-red font-display mb-4"
          style={{fontSize: calculateFontSize(42)}}
        >
          Regular Font 
        </Text>

        <Text className="text-xl text-primary-500 font-display-medium mb-4">
          Medium Italic Font
        </Text>
        
        <Text className="text-xl text-green font-display-bold mb-8">
          Bold Font 
        </Text>

    <View style={{ marginBottom: calculateHeight(32), width: '100%', maxWidth: 400, gap: calculateHeight(12) }}>    
       <View style={{ gap: calculateHeight(12) }}>
          <PrimaryButton 
            title="Button" 
            fullWidth
            icon='heart-outline'
            iconSize={20}
          />

          <SecondaryButton 
            title="Button" 
            fullWidth
          />

          <SocialButton 
            title="Continue with Google" 
            icon="google"
            iconSize={20}
            fullWidth
          />
          
          <SocialButton 
            title="Continue with Apple" 
            icon="apple"
            iconSize={25}
            size='medium'
            fullWidth
          />
          
          <PaymentButton 
            title="Payment Button" 
            price='100$'
            size='medium'
            disabled={false}
            fullWidth
          />

        </View>
      </View>
        <View style={{ width: '100%', maxWidth: 400, marginTop: calculateHeight(24) }}>
          <Input 
            placeholder="Password"
            icon="lock"
            isPassword={true}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
