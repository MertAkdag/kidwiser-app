import { useFonts } from 'expo-font';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import '../global.css';
import {
  PaymentButton,
  PrimaryButton,
  SecondaryButton,
  SocialButton
} from '../src/components/button/index';
import { PaymentMethodCard, ResetPasswordCard, SelectableCard } from '../src/components/card/card';
import { EventCard } from '../src/components/eventcard';
import { Input } from '../src/components/input';
import { SegmentedControl } from '../src/components/segmented';
import { theme } from '../src/constants/Colors';
import { useResponsive } from '../src/hooks/useResponsive';
import '../tailwind.config';



const exampleEvents = [
  {
    id: '1',
    title: 'Disco Tarkan - Goodbye Party',
    date: '12 July',
    time: '08:00 PM',
    location: 'Istanbul',
    attendeeCount: 40,
    attendeeAvatars: [
      require('../src/assets/images/insan1.jpg'),
      require('../src/assets/images/insan2.jpg'),
    ],
  },
  {
    id: '2',
    title: '2000s Hip Hop Night',
    date: '9 July',
    time: '09:30 PM',
    location: 'Antalya',
    attendeeCount: 25,
    attendeeAvatars: [
      require('../src/assets/images/insan2.jpg'),
      require('../src/assets/images/insan1.jpg'),
    ],
  },
];

export default function Index() {
  const { calculateFontSize, calculateHeight, calculateWidth} = useResponsive();
  const [isEventLiked, setIsEventLiked] = useState(false);

  const [fontsLoaded] = useFonts({
    'SFProDisplay-Regular': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYREGULAR.ttf'),
    'SFProDisplay-Bold': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYBOLD.ttf'),
    'SFProDisplay-Medium': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYSEMIBOLDITALIC.ttf'),
  });
  const [selectedPayment, setSelectedPayment] = useState<string>('credit-card');
  const [selectedResetMethod, setSelectedResetMethod] = useState<string>('email');
  const [selectedTicketType, setSelectedTicketType] = useState<string>('general');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
    >
      <ScrollView 
        style={{ flex: 1, backgroundColor: theme.colors.greyscale[200]}}
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 90
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

          <SegmentedControl
            labels={['deneme1', 'deneme2']}
            selectedIndex={selected}
            onChange={setSelected}
            />

        </View>
      </View>
        <View style={{ width: '100%', maxWidth: 400, marginTop: calculateHeight(24) }}>
          <Input 
            placeholder="Password"
            icon="lock"
            isPassword={true}
          />
          <Input
            variant="search"
            value={search}
            onChangeText={setSearch}
            onClear={() => setSearch('')}
          />
        </View>
        <View style={{ width: '100%', maxWidth: calculateWidth(400), gap: calculateHeight(12) }}>
          <Text className="text-primary-500 font-display-bold mb-4 mt-8"
            style={{fontSize: calculateFontSize(22), color: theme.colors.red}}>
            Event Cards
          </Text>

          <EventCard
            variant="list"
            event={exampleEvents[0]}
            liked={isEventLiked}
            onLikeChange={setIsEventLiked}
          />

          <EventCard
            variant="featured"
            event={exampleEvents[1]}
          />

          <EventCard
            variant="featured-bordered"
            event={exampleEvents[1]}
          />

          <Text className="text-primary-500 font-display-bold mb-4 mt-8"
            style={{fontSize: calculateFontSize(22), color: theme.colors.red}}>
            Payment Method 
          </Text>
                  
                  <PaymentMethodCard 
                    title="Credit or debit card"
                    icon="credit-card"
                    selected={selectedPayment === 'credit-card'}
                    fullWidth
                    onPress={() => setSelectedPayment('credit-card')}
                  />
        
                  <PaymentMethodCard 
                    title="Paypal"
                    icon="paypal"
                    selected={selectedPayment === 'paypal'}
                    fullWidth
                    onPress={() => setSelectedPayment('paypal')}
                  />
        
                  <PaymentMethodCard 
                    title="Bank Link"
                    icon="building-bank"
                    selected={selectedPayment === 'bank-link'}
                    fullWidth
                    onPress={() => setSelectedPayment('bank-link')}
                  />
                  <Text className="text-primary-500 font-display-bold mb-4 mt-8"
                  style={{fontSize: calculateFontSize(22), color: theme.colors.red}}>
                    Reset Password
                  </Text>
                  
                  <ResetPasswordCard 
                    title="Email"
                    subtitle="********@gmail.com"
                    icon="mail"
                    selected={selectedResetMethod === 'email'}
                    fullWidth
                    onPress={() => setSelectedResetMethod('email')}
                  />
        
                  <ResetPasswordCard 
                    title="Phone Number"
                    subtitle="+90******8988"
                    icon="phone"
                    selected={selectedResetMethod === 'phone'}
                    fullWidth
                    onPress={() => setSelectedResetMethod('phone')}
                  />
                  
                  <Text className="text-primary-500 font-display-bold mb-4 mt-8"
                  style={{fontSize: calculateFontSize(22), color: theme.colors.red}}>
                    Ticket Type
                  </Text>
                  
                  <SelectableCard 
                    title="Genel"
                    subtitle="$100"
                    selected={selectedTicketType === 'general'}
                    fullWidth
                    onPress={() => setSelectedTicketType('general')}
                  />
        
                  <SelectableCard 
                    title="VIP"
                    subtitle="$1000"
                    selected={selectedTicketType === 'vip'}
                    fullWidth
                    onPress={() => setSelectedTicketType('vip')}
                  />
                  
                  <Text className="text-primary-500 font-display-bold mb-4 mt-8"
                  style={{fontSize: calculateFontSize(22), color: theme.colors.red}}>
                    --------------
                  </Text>
                </View>          
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
