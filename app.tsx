import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import './global.css'
import Navigation from './src/navigation'


export default function App() {
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
    'SFProDisplay-BlackItalic': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYBLACKITALIC.ttf'),
    'SFProDisplay-Bold': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYBOLD.ttf'),
    'SFProDisplay-HeavyItalic': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYHEAVYITALIC.ttf'),
    'SFProDisplay-LightItalic': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYLIGHTITALIC.ttf'),
    'SFProDisplay-Medium': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYMEDIUM.ttf'),
    'SFProDisplay-Regular': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYREGULAR.ttf'),
    'SFProDisplay-SemiBoldItalic': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYSEMIBOLDITALIC.ttf'),
    'SFProDisplay-ThinItalic': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYTHINITALIC.ttf'),
    'SFProDisplay-UltraLightItalic': require('./src/assets/fonts/sf_pro_display/SFPRODISPLAYULTRALIGHTITALIC.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <Navigation />
}