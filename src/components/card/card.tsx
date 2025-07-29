import React, { ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Icon, { IconName } from '../icon/Icon';

export interface CardProps extends TouchableOpacityProps {
  title: string;
  icon?: IconName;
  iconColor?: string;
  iconBgColor?: string;
  variant?: 'default' | 'payment' | 'check';
  selected?: boolean;
  subtitle?: string;
  fullWidth?: boolean;
  showCheckMark?: boolean;
  children?: ReactNode;
}

export default function Card({
  title,
  icon,
  iconColor = theme.colors.white,
  iconBgColor = theme.colors.primary[500],
  variant = 'default',
  selected = false,
  subtitle,
  fullWidth = false,
  showCheckMark = true,
  style,
  onPress,
  children,
  ...props
}: CardProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  const getVariantStyles = () => {
    const baseStyle = {
      borderRadius: calculateWidth(16),
      padding: calculateWidth(16),
    };

    switch (variant) {
      case 'payment':
      case 'check':
        return {
          container: {
            ...baseStyle,
            borderWidth: 2,
            borderColor: selected ? theme.colors.primary[500] : theme.colors.greyscale[200],
            backgroundColor: theme.colors.greyscale[50],
            height: calculateHeight(72),
            shadowColor: selected ? theme.colors.primary[500] : 'transparent',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: selected ? 0.1 : 0,
            shadowRadius: selected ? 8 : 0,
            elevation: selected ? 3 : 0,
          },
        };
        
      default:
        return {
          container: {
            ...baseStyle,
            borderWidth: 2,
            borderColor: theme.colors.greyscale[200],
            backgroundColor: theme.colors.white,
            height: calculateHeight(64),
          },
        };
    }
  };

  const variantStyles = getVariantStyles();

  const renderIconContainer = () => {
    if (!icon) return null;
    
    const iconSize = variant === 'payment' || variant === 'check' ? 24 : 22;
    const containerSize = variant === 'payment' || variant === 'check' ? 48 : 40;

    return (
      <View style={{
        width: calculateWidth(containerSize),
        height: calculateWidth(containerSize),
        borderRadius: calculateWidth(12),
        backgroundColor: iconBgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Icon 
          name={icon}
          size={calculateWidth(iconSize)}
          color={iconColor}
        />
      </View>
    );
  };


  const renderTextContent = () => {
    return (
      
      <View style={{ 
        flex: 1, 
        marginLeft: icon ? calculateWidth(16) : 0,
        justifyContent: 'center',
      }}>
        <View style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: calculateFontSize(variant === 'payment' || variant === 'check' ? 16 : 14),
            fontWeight: '600',
            color: selected ? theme.colors.primary[500] : theme.text.primary,
            marginBottom: subtitle ? calculateHeight(4) : 0,
          }}>
            {title}
          </Text>
          
          {subtitle && (
            <Text style={{
              fontSize: calculateFontSize(14),
              color: theme.text.secondary,
            }}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    );
  };

  const renderCheckMark = () => {
    if ((variant !== 'check' && variant !== 'payment') || !showCheckMark) return null;
    
    return (
      <View style={{
        width: calculateWidth(32),
        height: calculateWidth(32),
        borderRadius: calculateWidth(16),
        backgroundColor: selected ? theme.colors.primary[500] : 'transparent',
        borderWidth: selected ? 0 : 2,
        borderColor: selected ? 'transparent' : theme.colors.greyscale[300],
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: calculateWidth(16),
      }}>
        {selected && (
          <Icon 
            name="check"
            size={calculateWidth(16)}
            color={theme.colors.white}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[
        variantStyles.container,
        {
          width: fullWidth ? '100%' : undefined,
          minWidth: fullWidth ? undefined : calculateWidth(280),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      {renderIconContainer()}
      {renderTextContent()}
      {renderCheckMark()}
      {children}
    </TouchableOpacity>
  );
}

export const PaymentMethodCard = ({ 
  selected = false, 
  iconColor, 
  iconBgColor, 
  ...props 
}: Omit<CardProps, 'variant'>) => (
  <Card 
    variant="payment" 
    selected={selected}
    iconColor={selected ? theme.colors.white : theme.colors.greyscale[500]}
    iconBgColor={selected ? theme.colors.primary[500] : theme.colors.greyscale[100]}
    {...props} 
  />
);

export const SelectableCard = ({ 
  selected = false, 
  iconColor, 
  iconBgColor, 
  ...props 
}: Omit<CardProps, 'variant'>) => (
  <Card 
    variant="check" 
    selected={selected}
    iconColor={selected ? theme.colors.white : theme.colors.greyscale[500]}
    iconBgColor={selected ? theme.colors.primary[500] : theme.colors.greyscale[100]}
    {...props} 
  />
);

export const ResetPasswordCard = ({ 
  selected = false, 
  iconColor, 
  iconBgColor, 
  ...props 
}: Omit<CardProps, 'variant' | 'showCheckMark'>) => (
  <Card 
    variant="check" 
    selected={selected}
    showCheckMark={false}
    iconColor={selected ? theme.colors.white : theme.colors.greyscale[500]}
    iconBgColor={selected ? theme.colors.primary[500] : theme.colors.greyscale[100]}
    {...props} 
  />
);
