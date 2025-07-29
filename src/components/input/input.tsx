import React, { useEffect, useRef, useState } from 'react';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Icon, { IconName } from '../icon/Icon';

import {
    Pressable,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode | IconName;
  iconColor?: string;
  iconSize?: number;
  isPassword?: boolean;
  variant?: 'default' | 'small' | 'search' | 'pin';
  onClear?: () => void;
  showClearButton?: boolean;

  length?: number;
  onComplete?: (value: string) => void;
  error?: boolean;
  pinStyle?: ViewStyle;
  pinTextStyle?: TextStyle;
}

export default function Input({
  label,
  icon,
  iconColor = theme.colors.greyscale[400],
  iconSize = 20,
  isPassword = false,
  variant = 'default',
  onClear,
  showClearButton = false,

  length = 4,
  onComplete,
  error = false,
  pinStyle,
  pinTextStyle,
  
  style,
  ...props
}: InputProps) {
  const { calculateFontSize, calculateHeight, calculateWidth } = useResponsive();
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(isPassword);
  const inputRef = useRef<TextInput>(null);

  const [internalValue, setInternalValue] = useState(props.value || '');
  const isPinVariant = variant === 'pin';
  const isSearchVariant = variant === 'search';
  const searchIcon = isSearchVariant ? 'search' : icon;

  useEffect(() => {
    if (isPinVariant && props.value !== undefined) {
      setInternalValue(String(props.value));
    }
  }, [props.value, isPinVariant]);

  useEffect(() => {
    if (isPinVariant && internalValue.length === length && onComplete) {
      onComplete(internalValue);
    }
  }, [internalValue, length, onComplete, isPinVariant]);

  useEffect(() => {
    if (isPinVariant && props.autoFocus) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isPinVariant, props.autoFocus]);
  
  const getIconColor = () => {
    if (focused) {
      return theme.colors.primary[500];
    }
    if (isSearchVariant) {
      return theme.colors.greyscale[900];
    }
    return iconColor;
  };
  
  const searchIconColor = getIconColor();
  const shouldShowClearButton = isSearchVariant ? (props.value && String(props.value).length > 0) : showClearButton;

  const handlePinChangeText = (text: string) => {
    if (!isPinVariant) return;
    
    text = text.replace(/[^0-9]/g, '');
    
    if (text.length > length) {
      text = text.slice(0, length);
    }

    setInternalValue(text);
    props.onChangeText?.(text);
  };

  const renderPinInput = () => {
    if (!isPinVariant) return null;

    const renderPinBoxes = () => {
      return Array.from({ length }, (_, index) => {
        const char = internalValue[index] || '';
        const hasValue = index < internalValue.length;
        const isActive = index === internalValue.length && focused;
        
        return (
          <View
            key={index}
            style={[
              {
                width: calculateWidth(60),
                height: calculateWidth(60),
                borderRadius: calculateWidth(16),
                borderWidth: 2,
                borderColor: error 
                  ? theme.colors.red
                  : isActive 
                    ? theme.colors.primary[500]
                    : theme.colors.greyscale[200],
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: calculateWidth(6),
              },
              pinStyle,
            ]}
          >
            <Text style={[
              {
                fontSize: calculateFontSize(24),
                fontWeight: '600',
                fontFamily: 'SFProDisplay-Semibold',
                color: hasValue ? theme.colors.greyscale[900] : theme.colors.greyscale[400],
              },
              pinTextStyle,
            ]}>
              {char}
            </Text>
          </View>
        );
      });
    };

    return (
      <View style={{ marginBottom: calculateHeight(16) }}>
        {label && (
          <Text
            style={{
              fontSize: calculateFontSize(15),
              marginBottom: calculateHeight(8),
              color: theme.text.primary,
            }}
          >
            {label}
          </Text>
        )}
        
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('dokunuldu');
            inputRef.current?.focus();
          }}
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              paddingVertical: calculateHeight(8),
            },
            style
          ]}
        >
          {renderPinBoxes()}
          <TextInput
            ref={inputRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              color: 'transparent',
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              fontSize: 1,
            }}
            value={internalValue}
            onChangeText={handlePinChangeText}
            onFocus={(e) => {
              console.log('pin odaklandı');
              handleFocus(e);
            }}
            onBlur={handleBlur}
            keyboardType="numeric"
            maxLength={length}
            autoCorrect={false}
            autoCapitalize="none"
            autoFocus={props.autoFocus}
            textContentType="oneTimeCode"
            selectionColor="transparent"
            caretHidden={true}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderIcon = () => {
    const iconToRender = searchIcon || icon;
    if (!iconToRender) return null;
    
    if (typeof iconToRender === 'string') {
      return <Icon name={iconToRender as IconName} size={iconSize} color={searchIconColor} />;
    }
    
    return iconToRender;
  };

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'small':
        return {
          height: calculateHeight(40),
          width: calculateWidth(80),
          borderRadius: calculateWidth(16),
          backgroundColor: theme.colors.white,
          borderWidth: 1.5,
          borderColor: focused ? theme.colors.primary[500] : theme.colors.greyscale[200],
        };
      case 'search':
        return {
          height: calculateHeight(64),
          width: '100%',
          borderRadius: calculateWidth(16),
          backgroundColor: theme.colors.white,
          borderWidth: focused ? 2 : 1,
          borderColor: focused ? theme.colors.primary[500] : theme.colors.greyscale[200],
        };
      default:
        return {
          height: calculateHeight(56),
          width: calculateWidth(335),
          borderRadius: calculateWidth(16),
          backgroundColor: theme.colors.white,
          borderWidth: 1.5,
          borderColor: focused ? theme.colors.primary[500] : theme.colors.greyscale[200],
        };
    }
  };

  const variantStyles = getVariantStyles();

  const handleContainerPress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (event: any) => {
    setFocused(true);
    props.onFocus?.(event);
  };

  const handleBlur = (event: any) => {
    setFocused(false);
    props.onBlur?.(event);
  };

  const togglePasswordVisibility = () => {
    setSecure(!secure);
  };

  const handleClear = () => {
    onClear?.();
  };

  if (isPinVariant) {
    return renderPinInput();
  }

  return (
    <View style={{ marginBottom: calculateHeight(16) }}>
      {label && (
        <Text
          style={{
            fontSize: calculateFontSize(15),
            marginBottom: calculateHeight(8),
            color: theme.text.primary,
          }}
        >
          {label}
        </Text>
      )}
      
      <TouchableWithoutFeedback onPress={handleContainerPress}>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: (searchIcon || icon) ? 'flex-start' : 'center',
              paddingHorizontal: calculateWidth(16),
              shadowColor: focused ? theme.colors.primary[500] : 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: focused ? 0.1 : 0,
              shadowRadius: focused ? 4 : 0,
              elevation: focused ? 2 : 0,
            },
            variantStyles,
          ]}
        >
          {(searchIcon || icon) && (
            <View style={{ marginRight: calculateWidth(12) }}>
              {renderIcon()}
            </View>
          )}

          <TextInput
            ref={inputRef}
            style={[
              {
                flex: 1,
                fontSize: calculateFontSize(16),
                color: theme.text.primary,
                paddingVertical: 0,
                height: '100%',
                textAlign: (searchIcon || icon) ? 'left' : 'center',
                textAlignVertical: 'center',
                paddingRight: (isPassword || shouldShowClearButton) ? calculateWidth(8) : 0,
                fontWeight: isSearchVariant ? '500' : 'normal',
              },
              style,
            ]}
            placeholder={isSearchVariant ? "Search events..." : props.placeholder}
            placeholderTextColor={isSearchVariant ? theme.colors.greyscale[500] : theme.colors.greyscale[400]}
            secureTextEntry={secure}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoCorrect={false}
            autoCapitalize="none"
            spellCheck={false}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.primary[500]}
            {...props}
          />

          {isPassword && (
            <Pressable 
              onPress={togglePasswordVisibility}
              style={{ 
                marginLeft: calculateWidth(8),
                padding: calculateWidth(4),
              }}
              hitSlop={10}
            >
              <Icon 
                name={secure ? "eye" : "eye-off"} 
                size={iconSize} 
                color={theme.colors.greyscale[400]} 
              />
            </Pressable>
          )}

          {shouldShowClearButton && (
            <TouchableOpacity
              onPress={handleClear}
              style={{
                width: calculateWidth(24),
                height: calculateWidth(24),
                borderRadius: calculateWidth(16),
                backgroundColor: theme.colors.greyscale[400],
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: calculateWidth(8),
              }}
              hitSlop={8}
            >
              <Icon 
                name="x" 
                size={calculateWidth(12)} 
                color={theme.colors.white} 
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
