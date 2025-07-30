import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Icon, { IconName } from '../icon/Icon';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'social' | 'payment';
  size?: 'small' | 'medium' | 'large';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  iconSize?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  price?: string;
  socialText?: string;
  fontFamily?: string;
  fontWeight?: '400' | '500' | '600' | '700' | 'normal' | 'bold';
}

export default function Button({
  title,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  iconColor,
  iconSize,
  disabled = false,
  fullWidth = false,
  price,
  socialText,
  fontFamily,
  fontWeight,
  style,
  ...props
}: ButtonProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          height: calculateHeight(40),
          paddingHorizontal: calculateWidth(16),
          fontSize: calculateFontSize(14),
        };
      case 'large':
        return {
          height: calculateHeight(64),
          paddingHorizontal: calculateWidth(24),
          fontSize: calculateFontSize(18),
        };
      default: 
        return {
          height: calculateHeight(56),
          paddingHorizontal: calculateWidth(20),
          fontSize: calculateFontSize(16),
        };
    }
  };

  const getVariantStyles = () => {
    const baseStyles = getSizeStyles();
    
    switch (variant) {
      case 'secondary':
        return {
          container: {
            backgroundColor: theme.colors.primary[50],
            borderRadius: calculateWidth(16),
            borderWidth: 0,
          },
          text: {
            color: theme.colors.primary[500],
            fontWeight: '600' as const,
            fontFamily: fontFamily || 'SFProDisplay-Medium',
          },
        };
        
      case 'social':
        return {
          container: {
            backgroundColor: theme.colors.white,
            borderRadius: calculateWidth(16),
            borderWidth: 1.5,
            borderColor: theme.colors.greyscale[200],
          },
          text: {
            color: theme.colors.greyscale[900],
            fontWeight: fontWeight || '500' as const,
            fontFamily: fontFamily || 'SFProDisplay-Medium',
          },
        };
        
      case 'payment':
        return {
          container: {
            backgroundColor: theme.colors.primary[500],
            borderRadius: calculateWidth(16),
            borderWidth: 0,
          },
          text: {
            color: theme.colors.white,
            fontWeight: fontWeight || '600' as const,
            fontFamily: fontFamily || 'SFProDisplay-Medium',
          },
        };
        
      default: 
        return {
          container: {
            backgroundColor: theme.colors.primary[500],
            borderRadius: calculateWidth(16),
            borderWidth: 0,
          },
          text: {
            color: theme.colors.white,
            fontWeight: fontWeight || '600' as const,
            fontFamily: fontFamily || 'SFProDisplay-Medium',
          },
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  const getDisabledStyles = () => {
    if (!disabled) return {};
    
    return {
      container: {
        opacity: 0.5,
      },
      text: {
        color: theme.colors.white,
      },
    };
  };

  const disabledStyles = getDisabledStyles();

  const renderIcon = () => {
    if (!icon) return null;
    
    const calculatedIconSize = iconSize || sizeStyles.fontSize;
    const calculatedIconColor = iconColor || variantStyles.text.color;
    
    return (
      <Icon
        name={icon}
        size={calculatedIconSize}
        color={calculatedIconColor}
      />
    );
  };

  const renderPaymentContent = () => {
    if (variant !== 'payment') return null;
    
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
      }}>
        <Text style={[
          {
            fontSize: sizeStyles.fontSize,
            fontWeight: variantStyles.text.fontWeight,
            fontFamily: variantStyles.text.fontFamily,
            color: variantStyles.text.color,
          },
          disabledStyles.text,
        ]}>
          {title}
        </Text>
        
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          {price && (
            <Text style={[
              {
                fontSize: sizeStyles.fontSize,
                fontWeight: '700',
                fontFamily: fontFamily || 'SFProDisplay-Bold',
                color: variantStyles.text.color,
                marginRight: calculateWidth(8),
              },
              disabledStyles.text,
            ]}>
              {price}
            </Text>
          )}
          
          <Icon 
            name="chevron-right" 
            size={calculateWidth(20)} 
            color={theme.colors.greyscale[400]}
            style={{ marginRight: -calculateWidth(14) }} 

          />
          <Icon 
            name="chevron-right" 
            size={calculateWidth(20)} 
            color={variantStyles.text.color}
          />
        </View>
      </View>
    );
  };

  const renderNormalContent = () => {
    if (variant === 'payment') return null;
    
    const displayText = variant === 'social' && socialText ? socialText : title;
    
    return (
      <>
        {iconPosition === 'left' && renderIcon()}
        
        <Text style={[
          {
            fontSize: sizeStyles.fontSize,
            fontWeight: variantStyles.text.fontWeight,
            fontFamily: variantStyles.text.fontFamily,
            color: variantStyles.text.color,
            marginLeft: (iconPosition === 'left' && icon) ? calculateWidth(8) : 0,
            marginRight: (iconPosition === 'right' && icon) ? calculateWidth(8) : 0,
          },
          disabledStyles.text,
        ]}>
          {displayText}
        </Text>
        
        {iconPosition === 'right' && renderIcon()}
      </>
    );
  };

  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: variant === 'payment' ? 'flex-start' : 'center',
          height: sizeStyles.height,
          paddingHorizontal: sizeStyles.paddingHorizontal,
          width: fullWidth ? '100%' : undefined,
          minWidth: fullWidth ? undefined : calculateWidth(120),
          shadowColor:
            variant === 'social' || variant === 'secondary'
              ? 'transparent'
              : theme.colors.primary[500],
          shadowOffset: {
            width: 0,
            height: variant === 'social' ? 1 : variant === 'secondary' ? 0 : 2,
          },
          shadowOpacity:
            variant === 'social' ? 0.05 : variant === 'secondary' ? 0 : 0.1,
          shadowRadius:
            variant === 'social' ? 2 : variant === 'secondary' ? 0 : 4,
          elevation:
            variant === 'social' ? 1 : variant === 'secondary' ? 0 : 2,
        },
        variantStyles.container,
        disabledStyles.container,
        style,
      ]}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      {renderPaymentContent()}
      {renderNormalContent()}
    </TouchableOpacity>
  );
}

export const PrimaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="secondary" {...props} />
);

export const SocialButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="social" {...props} />
);

export const PaymentButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="payment" {...props} />
);
