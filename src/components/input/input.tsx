import React, { useRef, useState } from 'react';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Icon, { IconName } from '../icon/Icon';

import {
    Pressable,
    Text,
    TextInput,
    TextInputProps,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode | IconName;
  iconColor?: string;
  iconSize?: number;
  isPassword?: boolean;
  variant?: 'default' | 'small';
}

export default function Input({
  label,
  icon,
  iconColor = theme.colors.greyscale[400],
  iconSize = 20,
  isPassword = false,
  variant = 'default',
  style,
  ...props
}: InputProps) {
  const { calculateFontSize, calculateHeight, calculateWidth } = useResponsive();
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(isPassword);
  const inputRef = useRef<TextInput>(null);

  const renderIcon = () => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      return <Icon name={icon as IconName} size={iconSize} color={iconColor} />;
    }
    
    return icon;
  };

  const inputHeight = variant === 'small' ? calculateHeight(40) : calculateHeight(56);
  const inputWidth = variant === 'small' ? calculateWidth(80) : calculateWidth(335);

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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: icon ? 'flex-start' : 'center',
            paddingHorizontal: calculateWidth(16),
            borderRadius: calculateWidth(12),
            borderWidth: 1.5,
            borderColor: focused ? theme.colors.primary[500] : theme.colors.greyscale[200],
            backgroundColor: theme.colors.white,
            height: inputHeight,
            width: inputWidth,
            shadowColor: focused ? theme.colors.primary[500] : 'transparent',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: focused ? 0.1 : 0,
            shadowRadius: focused ? 4 : 0,
            elevation: focused ? 2 : 0,
          }}
        >
          {icon && (
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
                textAlign: icon ? 'left' : 'center',
                textAlignVertical: 'center',
                paddingRight: isPassword ? calculateWidth(8) : 0,
              },
              style,
            ]}
            placeholderTextColor={theme.colors.greyscale[400]}
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
              onPress={() => setSecure(!secure)}
              style={{ 
                marginLeft: calculateWidth(8),
                padding: calculateWidth(4),
              }}
              hitSlop={10}
            >
              <Icon 
                name="eye-off" 
                size={iconSize} 
                color={theme.colors.greyscale[400]} 
              />
            </Pressable>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
