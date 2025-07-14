import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';

export default function TicketScreen() {
  const { calculateFontSize } = useResponsive();

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: calculateFontSize(24),
        fontFamily: 'SFProDisplay-Bold',
        color: theme.colors.greyscale[900],
      }}>
        bilet
      </Text>
    </View>
  );
} 