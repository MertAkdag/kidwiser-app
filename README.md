# 🚀 KidWiser App - React Native Modüler UI Komponent Kütüphanesi

![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~53.0.16-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-blue.svg)
![NativeWind](https://img.shields.io/badge/NativeWind-^4.1.23-38bdf8.svg)

KidWiser App, modern React Native/Expo uygulamaları için özel olarak tasarlanmış, responsive ve tam özellikli UI komponent kütüphanesidir. Gelişmiş tasarım sistemi, ikon entegrasyonu, responsive boyutlandırma ve optimum UX/UI standartları sunar.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Kurulum](#-kurulum)
- [Hızlı Başlangıç](#-hızlı-başlangıç)
- [Proje Mimarisi](#-proje-mimarisi)
- [Komponentler](#-komponentler)
- [Tema Sistemi](#-tema-sistemi)
- [Responsive Tasarım](#-responsive-tasarım)
- [İkon Sistemi](#-i̇kon-sistemi)
- [API Dokümantasyonu](#-api-dokümantasyonu)
- [Örnekler](#-örnekler)
- [Troubleshooting](#-troubleshooting)
- [Katkıda Bulunma](#-katkıda-bulunma)

## ✨ Özellikler

### 🎯 Ana Özellikler
- **Tam TypeScript desteği** - Type-safe geliştirme deneyimi
- **Responsive tasarım sistemi** - Tüm ekran boyutlarında mükemmel görünüm
- **Modüler komponent yapısı** - Esnek ve yeniden kullanılabilir
- **33+ hazır SVG ikon** - Comprehensive ikon kütüphanesi
- **Gelişmiş input sistemi** - Password, validation, focus states
- **Modern tema sistemi** - Consistent design language
- **Expo Router entegrasyonu** - Modern navigasyon
- **NativeWind CSS** - Utility-first styling

### 🎨 Tasarım Özellikleri
- **SF Pro Display font** - Apple ecosystem consistency
- **Semantic color system** - Consistent brand colors
- **Focus states** - Enhanced user interaction
- **Shadow system** - Depth and hierarchy
- **Accessibility** - WCAG guidelines compliance

## 🚀 Kurulum

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn
- Expo CLI
- React Native development environment

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/yourusername/kidwiser-app.git
cd kidwiser-app
```

### 2. Bağımlılıkları Yükleyin
```bash
# npm kullanarak
npm install

# veya yarn kullanarak
yarn install
```

### 3. iOS Bağımlılıklarını Yükleyin (iOS için)
```bash
cd ios && pod install && cd ..
```

### 4. Uygulamayı Başlatın
```bash
# Development server'ı başlat
npm start

# iOS simulator
npm run ios

# Android emulator
npm run android

# Web browser
npm run web
```

## ⚡ Hızlı Başlangıç

### Temel Kullanım

```typescript
import React from 'react';
import { View } from 'react-native';
import Input from './src/components/inputs/input';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Input 
        placeholder="E-posta adresinizi girin"
        icon="mail"
        label="E-posta"
      />
      
      <Input 
        placeholder="Şifrenizi girin"
        icon="lock"
        isPassword={true}
        label="Şifre"
      />
    </View>
  );
}
```

## 🏗️ Proje Mimarisi

```
kidwiser-app/
├── 📁 app/                          # Expo Router pages
│   ├── index.tsx                    # Ana sayfa
│   └── ...
├── 📁 src/                          # Kaynak kodlar
│   ├── 📁 assets/                   # Statik varlıklar
│   │   ├── Icon.tsx                 # Merkezi ikon yöneticisi
│   │   ├── 📁 fonts/                # Font dosyaları
│   │   │   └── sf_pro_display/      # SF Pro Display font ailesi
│   │   ├── 📁 icons/                # SVG ikon koleksiyonu
│   │   └── 📁 images/               # Görsel varlıklar
│   ├── 📁 components/               # UI Komponentleri
│   │   ├── 📁 buttons/              # Button komponentleri
│   │   └── 📁 inputs/               # Input komponentleri
│   │       └── input.tsx            # Ana Input komponenti
│   ├── 📁 constants/                # Sabitler
│   │   └── Colors.ts                # Tema renk sistemi
│   └── 📁 hooks/                    # Custom hook'lar
│       └── Responsive.tsx           # Responsive boyutlandırma
├── 📁 config/                       # Konfigürasyon dosyaları
│   ├── app.json                     # Expo konfigürasyonu
│   ├── babel.config.js              # Babel konfigürasyonu
│   ├── metro.config.js              # Metro bundler konfigürasyonu
│   └── tailwind.config.js           # TailwindCSS konfigürasyonu
└── 📄 package.json                  # Proje bağımlılıkları
```

### Mimari Prensipleri

#### 1. **Separation of Concerns**
- **Assets**: Tüm statik varlıklar merkezi klasörde
- **Components**: UI komponentleri kategorilere ayrılmış
- **Constants**: Theme ve configuration değerleri
- **Hooks**: Yeniden kullanılabilir logic

#### 2. **Scalability**
- Modüler komponent yapısı
- TypeScript ile type safety
- Consistent naming conventions
- Clear folder structure

#### 3. **Maintainability**
- Single responsibility principle
- Clear dependencies
- Documented interfaces
- Consistent code style

## 🧩 Komponentler

### 📝 Input Komponenti

Modern ve esnek input komponenti with advanced features.

#### Props Interface
```typescript
interface InputProps extends TextInputProps {
  label?: string;                    // Input üstünde görünen etiket
  icon?: React.ReactNode | IconName; // Sol taraf ikonu
  iconColor?: string;                // İkon rengi (hex/rgb/rgba)
  iconSize?: number;                 // İkon boyutu (px)
  isPassword?: boolean;              // Şifre alanı aktivasyonu
  variant?: 'default' | 'small';    // Boyut varyantları
}
```

#### Kullanım Örnekleri

##### 1. Temel Input
```typescript
<Input 
  placeholder="İsminizi girin" 
  label="Ad Soyad"
/>
```

##### 2. İkonlu Input
```typescript
<Input 
  placeholder="E-posta adresinizi girin"
  icon="mail"
  label="E-posta"
  keyboardType="email-address"
  autoCapitalize="none"
/>
```

##### 3. Şifre Input'u
```typescript
<Input 
  placeholder="Şifrenizi girin"
  icon="lock"
  isPassword={true}
  label="Şifre"
  secureTextEntry={true}
/>
```

##### 4. Küçük Variant
```typescript
<Input 
  placeholder="Ara"
  icon="search"
  variant="small"
/>
```

##### 5. Custom İkon
```typescript
<Input 
  placeholder="Telefon numaranız"
  icon={<CustomPhoneIcon />}
  label="Telefon"
  keyboardType="phone-pad"
/>
```

#### Gelişmiş Özellikler

##### Focus State Management
```typescript
const [focused, setFocused] = useState(false);

// Automatic focus handling
const handleFocus = (event: any) => {
  setFocused(true);
  props.onFocus?.(event);
};
```

##### Container Press Handling
```typescript
// Clicking anywhere in container focuses input
const handleContainerPress = () => {
  inputRef.current?.focus();
};
```

##### Password Toggle
```typescript
const [secure, setSecure] = useState(isPassword);

// Eye icon toggles password visibility
<Pressable onPress={() => setSecure(!secure)}>
  <Icon name="eye-off" />
</Pressable>
```

## 🎨 Tema Sistemi

### Renk Paleti

#### Greyscale Palette
```typescript
export const Colors = {
  greyscale: {
    50: '#FAFAFA',   // Lightest
    100: '#F7FAFC',
    200: '#EDF2F7',  // Border default
    300: '#E2E8F0',
    400: '#CBD5E0',  // Text secondary
    500: '#A0AEC0',
    600: '#718096',  // Text tertiary
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',  // Text primary
  }
}
```

#### Primary Brand Colors
```typescript
primary: {
  50: '#F5F6FF',    // Very light
  100: '#ECEFFF',
  200: '#C3CAFF',
  300: '#9AA6FF',
  400: '#7081FF',
  500: '#455AF7',   // Main brand color
  600: '#3144D5',
  700: '#2132B3',
  800: '#132291',
  900: '#09156F',   // Darkest
}
```

#### Semantic Colors
```typescript
semantic: {
  red: '#FF6243',     // Error/danger
  yellow: '#FFD920',  // Warning
  green: '#00D394',   // Success
  purple: '#7A5BD7',  // Info
  skyblue: '#37B9E2', // Link
  orange: '#FF7A2E',  // Accent
}
```

### Theme Object

```typescript
export const theme = {
  colors: Colors,
  
  text: {
    primary: Colors.greyscale[900],    // Dark text
    secondary: Colors.greyscale[600],  // Medium text
    tertiary: Colors.greyscale[400],   // Light text
    disabled: Colors.greyscale[300],   // Disabled text
    inverse: Colors.white,             // White text
  },
  
  background: {
    primary: Colors.white,             // Main background
    secondary: Colors.greyscale[50],   // Card background
    tertiary: Colors.greyscale[100],   // Section background
  },
  
  border: {
    primary: Colors.greyscale[200],    // Default border
    secondary: Colors.greyscale[300],  // Stronger border
    focus: Colors.primary[500],        // Focus state
  },
  
  status: {
    success: Colors.green,
    warning: Colors.yellow,
    error: Colors.red,
    info: Colors.skyblue,
  },
}
```

### Theme Usage

#### In Components
```typescript
// Text color
color: theme.text.primary

// Background color
backgroundColor: theme.background.primary

// Border color with focus state
borderColor: focused ? theme.border.focus : theme.border.primary

// Status colors
color: theme.status.error
```

#### CSS Classes (NativeWind)
```typescript
// Predefined color classes
className="text-primary-500 bg-greyscale-50 border-greyscale-200"

// Custom utility classes
className="text-red bg-white border-focus"
```

## 📱 Responsive Tasarım

### Responsive Hook

```typescript
export const useResponsive = () => {
  const { width, height } = Dimensions.get('window');
  
  // Referans boyutları (iPhone 14 Pro)
  const baseWidth = 393;
  const baseHeight = 852;
  
  const calculateWidth = (size: number) => {
    return (width / baseWidth) * size;
  };
  
  const calculateHeight = (size: number) => {
    return (height / baseHeight) * size;
  };
  
  const calculateFontSize = (size: number) => {
    const scale = Math.min(width / baseWidth, height / baseHeight);
    return size * scale;
  };
  
  return {
    calculateWidth,
    calculateHeight,
    calculateFontSize,
    width,
    height,
  };
};
```

### Kullanım Örnekleri

#### Component İçinde
```typescript
const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

// Boyutlar
width: calculateWidth(350)
height: calculateHeight(56)
padding: calculateWidth(16)

// Font boyutları
fontSize: calculateFontSize(16)
```

#### Breakpoints
```typescript
const { width } = useResponsive();

// Mobile
if (width < 768) {
  // Mobile styles
}

// Tablet
if (width >= 768 && width < 1024) {
  // Tablet styles
}

// Desktop
if (width >= 1024) {
  // Desktop styles
}
```

### Responsive Principles

#### 1. **Proportional Scaling**
- Tüm boyutlar ekran boyutuna göre orantılı olarak ölçeklenir
- Font boyutları minimum ve maksimum değerlerle sınırlandırılır

#### 2. **Touch Target Size**
- Minimum 44px touch target (iOS HIG)
- Yeterli spacing ve padding

#### 3. **Content Adaptation**
- Küçük ekranlarda daha compact layout
- Büyük ekranlarda daha spacious design

## 🎯 İkon Sistemi

### Mevcut İkonlar

#### Navigation & UI
- `home` - Ana sayfa ikonu
- `search` - Arama ikonu
- `filter` - Filtreleme ikonu
- `chevron-up`, `chevron-down`, `chevron-left`, `chevron-right` - Yön okları

#### Communication
- `mail` - E-posta ikonu
- `phone` - Telefon ikonu
- `bell` - Bildirim ikonu

#### User & Account
- `user` - Kullanıcı ikonu
- `lock` - Kilit/güvenlik ikonu
- `eye-off` - Şifre gizleme/gösterme

#### Actions
- `heart` - Beğeni/favoriler
- `trash` - Silme
- `camera` - Fotoğraf çekme
- `calendar` - Tarih seçimi

#### Location & Maps
- `map-pin` - Konum işaretleyici

#### Payment & Finance
- `building-bank` - Banka
- `tabler-credit-card` - Kredi kartı
- `tabler-brand-paypal` - PayPal

#### Others
- `music` - Müzik
- `ticket` - Bilet
- `tabler-plus` - Artı/ekleme
- `tabler-check` - Onay/tik
- `triangle-square-circle` - Şekiller

### İkon Kullanımı

#### String ile Kullanım
```typescript
<Input icon="mail" />
<Input icon="lock" />
<Input icon="search" />
```

#### Component ile Kullanım
```typescript
import Icon from '../assets/Icon';

<Icon name="mail" size={20} color="#666" />
<Icon name="search" size={16} color="#999" />
```

#### Custom İkon Component
```typescript
const CustomIcon = () => (
  <View style={{ width: 20, height: 20 }}>
    {/* Your custom icon */}
  </View>
);

<Input icon={<CustomIcon />} />
```

### İkon Sistemi Mimarisi

#### Icon Component
```typescript
interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export type IconName = 
  | 'bell' | 'search' | 'home' | 'user' | 'heart' 
  | 'mail' | 'phone' | 'lock' | 'eye-off'
  // ... diğer ikon isimleri
```

#### SVG Entegrasyonu
- Tüm ikonlar SVG formatında
- react-native-svg ile render
- Scalable ve crisp görünüm
- Dynamic color ve size support

## 📚 API Dokümantasyonu

### Input Component API

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Input üstünde görünen etiket |
| `icon` | `React.ReactNode \| IconName` | `undefined` | Sol tarafta görünen ikon |
| `iconColor` | `string` | `theme.colors.greyscale[400]` | İkon rengi |
| `iconSize` | `number` | `20` | İkon boyutu (px) |
| `isPassword` | `boolean` | `false` | Şifre input'u aktivasyonu |
| `variant` | `'default' \| 'small'` | `'default'` | Boyut varyantı |
| `style` | `TextStyle` | `undefined` | Ek stil tanımlamaları |
| `...props` | `TextInputProps` | - | Tüm React Native TextInput props'ları |

#### Örnek Kullanımlar

##### E-posta Input'u
```typescript
<Input 
  label="E-posta Adresi"
  placeholder="ornek@email.com"
  icon="mail"
  keyboardType="email-address"
  autoCapitalize="none"
  autoComplete="email"
  value={email}
  onChangeText={setEmail}
/>
```

##### Şifre Input'u
```typescript
<Input 
  label="Şifre"
  placeholder="En az 8 karakter"
  icon="lock"
  isPassword={true}
  value={password}
  onChangeText={setPassword}
  secureTextEntry={true}
/>
```

##### Arama Input'u
```typescript
<Input 
  placeholder="Arama yapın..."
  icon="search"
  variant="small"
  value={searchQuery}
  onChangeText={setSearchQuery}
  returnKeyType="search"
  onSubmitEditing={handleSearch}
/>
```

##### Telefon Input'u
```typescript
<Input 
  label="Telefon Numarası"
  placeholder="+90 5xx xxx xx xx"
  icon="phone"
  keyboardType="phone-pad"
  value={phone}
  onChangeText={setPhone}
/>
```

### Icon Component API

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | **required** | İkon adı |
| `size` | `number` | `24` | İkon boyutu (px) |
| `color` | `string` | `'#000000'` | İkon rengi |
| `style` | `ViewStyle` | `undefined` | Ek stil tanımlamaları |

#### IconName Union Type
```typescript
export type IconName = 
  | 'bell' | 'search' | 'home' | 'user' | 'heart' | 'heart-1'
  | 'mail' | 'phone' | 'phone-x' | 'lock' | 'eye-off'
  | 'chevron-up' | 'chevron-down' | 'chevron-left' | 'chevron-right'
  | 'map-pin' | 'map-pin-1' | 'trash' | 'filter' | 'camera'
  | 'calendar' | 'music' | 'building-bank' | 'ticket' | 'ticket-1'
  | 'tabler-brand-paypal' | 'tabler-check' | 'tabler-credit-card'
  | 'tabler-plus' | 'triangle-square-circle' | 'user-1' | 'brand-dribbble'
```

### useResponsive Hook API

#### Return Values

| Function | Parameters | Return Type | Description |
|----------|------------|-------------|-------------|
| `calculateWidth` | `size: number` | `number` | Genişlik hesaplama |
| `calculateHeight` | `size: number` | `number` | Yükseklik hesaplama |
| `calculateFontSize` | `size: number` | `number` | Font boyutu hesaplama |
| `width` | - | `number` | Ekran genişliği |
| `height` | - | `number` | Ekran yüksekliği |

#### Kullanım Örneği
```typescript
const { 
  calculateWidth, 
  calculateHeight, 
  calculateFontSize,
  width,
  height 
} = useResponsive();

// Component stilleri
const styles = {
  container: {
    width: calculateWidth(350),
    height: calculateHeight(200),
    padding: calculateWidth(16),
  },
  text: {
    fontSize: calculateFontSize(16),
  }
};
```

## 💡 Örnekler

### Giriş Formu Örneği

```typescript
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Input from '../src/components/inputs/input';
import { useResponsive } from '../src/hooks/Responsive';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { calculateHeight, calculateWidth } = useResponsive();

  const handleLogin = () => {
    // Login logic here
    console.log('Login:', { email, password });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ 
        padding: calculateWidth(24),
        paddingTop: calculateHeight(60),
      }}>
        
        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: calculateHeight(32),
          textAlign: 'center',
        }}>
          Giriş Yap
        </Text>

        <Input 
          label="E-posta Adresi"
          placeholder="ornek@email.com"
          icon="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input 
          label="Şifre"
          placeholder="Şifrenizi girin"
          icon="lock"
          isPassword={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity 
          style={{
            backgroundColor: '#455AF7',
            borderRadius: calculateWidth(12),
            height: calculateHeight(56),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: calculateHeight(24),
          }}
          onPress={handleLogin}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}>
            Giriş Yap
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
```

### Profil Formu Örneği

```typescript
import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Input from '../src/components/inputs/input';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 24 }}>
        
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 24,
        }}>
          Profil Bilgileri
        </Text>

        <Input 
          label="Ad"
          placeholder="Adınızı girin"
          icon="user"
          value={formData.firstName}
          onChangeText={(value) => updateField('firstName', value)}
        />

        <Input 
          label="Soyad"
          placeholder="Soyadınızı girin"
          icon="user"
          value={formData.lastName}
          onChangeText={(value) => updateField('lastName', value)}
        />

        <Input 
          label="E-posta"
          placeholder="E-posta adresinizi girin"
          icon="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
        />

        <Input 
          label="Telefon"
          placeholder="Telefon numaranızı girin"
          icon="phone"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(value) => updateField('phone', value)}
        />

        <Input 
          label="Adres"
          placeholder="Adresinizi girin"
          icon="map-pin"
          multiline={true}
          numberOfLines={3}
          value={formData.address}
          onChangeText={(value) => updateField('address', value)}
        />

      </View>
    </ScrollView>
  );
}
```

### Arama Çubuğu Örneği

```typescript
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import Input from '../src/components/inputs/input';

export default function SearchExample() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Arama logic'i buraya
    if (searchQuery.length > 2) {
      // API call veya local search
      performSearch(searchQuery);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const performSearch = async (query: string) => {
    // Mock search implementation
    const mockResults = [
      'React Native',
      'TypeScript',
      'Expo',
      'JavaScript',
    ].filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(mockResults);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <Input 
        placeholder="Arama yapın..."
        icon="search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        returnKeyType="search"
      />

      <FlatList 
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}>
            <Text>{item}</Text>
          </View>
        )}
      />

    </View>
  );
}
```

## 🔧 Troubleshooting

### Yaygın Sorunlar ve Çözümleri

#### 1. **Font Yüklenmiyor**

**Problem**: SF Pro Display fontları görünmüyor
```
Invariant Violation: fontFamily "SFProDisplay-Regular" is not a system font
```

**Çözüm**:
```typescript
// app/index.tsx içinde
import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  'SFProDisplay-Regular': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYREGULAR.ttf'),
  'SFProDisplay-Bold': require('../src/assets/fonts/sf_pro_display/SFPRODISPLAYBOLD.ttf'),
});

if (!fontsLoaded) {
  return null; // Veya loading screen
}
```

#### 2. **İkonlar Görünmüyor**

**Problem**: SVG ikonları render olmuyor
```
Unable to resolve module react-native-svg
```

**Çözüm**:
```bash
npm install react-native-svg
npx pod-install # iOS için
```

Metro config güncellemesi:
```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

module.exports = config;
```

#### 3. **Responsive Hesaplamalar Yanlış**

**Problem**: Boyutlar beklenenden farklı
```
Width calculation seems off on tablets
```

**Çözüm**:
```typescript
// useResponsive hook'unda base değerleri kontrol edin
const baseWidth = 393;  // iPhone 14 Pro referans genişlik
const baseHeight = 852; // iPhone 14 Pro referans yükseklik

// Maksimum scale faktörü ekleyin
const scale = Math.min(width / baseWidth, height / baseHeight, 1.5);
```

#### 4. **Input Focus Sorunu**

**Problem**: Input focus olmuyor
```
Input doesn't focus when tapped on container
```

**Çözüm**:
```typescript
// TouchableWithoutFeedback kullanın
<TouchableWithoutFeedback onPress={handleContainerPress}>
  <View>
    <TextInput ref={inputRef} />
  </View>
</TouchableWithoutFeedback>

const handleContainerPress = () => {
  inputRef.current?.focus();
};
```

#### 5. **Android Shadow Sorunu**

**Problem**: Android'de shadow görünmüyor
```
Shadow styles not working on Android
```

**Çözüm**:
```typescript
// Elevation property ekleyin
style={{
  shadowColor: '#000',      // iOS için
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,             // Android için
}}
```

### Performance Optimizasyonları

#### 1. **Unnecessary Re-renders**

```typescript
// React.memo kullanın
export default React.memo(Input);

// useMemo ile expensive calculations
const containerStyle = useMemo(() => ({
  width: calculateWidth(350),
  height: calculateHeight(56),
}), [variant]);
```

#### 2. **Image Loading**

```typescript
// SVG yerine PNG kullanın büyük ikonlar için
// Lazy loading implementasyonu
```

### Debug Tips

#### 1. **Layout Debug**

```typescript
// Border ekleyerek layout'u görselleştirin
style={{
  borderWidth: 1,
  borderColor: 'red',
}}
```

#### 2. **Props Debug**

```typescript
// Props'ları console'a yazdırın
console.log('Input props:', props);
```

## 🤝 Katkıda Bulunma

### Development Kurulumu

1. **Repository'yi fork edin**
2. **Feature branch oluşturun**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Değişikliklerinizi commit edin**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Branch'inizi push edin**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Pull Request açın**

### Coding Standards

#### TypeScript Guidelines
- Strict type definitions kullanın
- Interface'leri export edin
- Generic types'ı document edin

#### Component Guidelines
- Functional components kullanın
- Props destructuring yapın
- Default props tanımlayın

#### Naming Conventions
- PascalCase component isimleri
- camelCase function isimleri
- UPPER_CASE constants

#### File Organization
```
components/
├── ComponentName/
│   ├── index.tsx          # Main component
│   ├── ComponentName.tsx  # Implementation
│   ├── types.ts          # Type definitions
│   └── styles.ts         # Styles (if needed)
```

### Testing

```bash
# Jest testlerini çalıştır
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

### Commit Conventions

```
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

---

## 📄 License

Bu proje MIT License altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙋‍♂️ Destek

Sorunlar veya sorular için:
- GitHub Issues
- E-posta: support@kidwiser.com
- Documentation: [docs.kidwiser.com](https://docs.kidwiser.com)

---

**KidWiser App** - Modern React Native UI Component Library 🚀
