import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, TouchableOpacity, View, ViewProps } from 'react-native';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';

export interface SegmentedControlProps extends ViewProps {
  labels: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  animationDuration?: number;
}

export default function SegmentedControl({
  labels,
  selectedIndex,
  onChange,
  animationDuration = 200,
  style,
  ...props
}:SegmentedControlProps) {

  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const scales = useRef(labels.map((_, i) => new Animated.Value(i === selectedIndex ? 1.02 : 1))).current;
  const colors = useRef(labels.map((_, i) => new Animated.Value(i === selectedIndex ? 1 : 0))).current;
  const sliderAnim = useRef(new Animated.Value(selectedIndex)).current;
  const [segmentWidth, setSegmentWidth] = useState(0);
  const PADDING = calculateWidth(4);


  useEffect(() => {
    labels.forEach((_, idx) => {
      Animated.timing(scales[idx], {
        toValue: idx === selectedIndex ? 1.02 : 1,
        duration: 180,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start();

      Animated.timing(colors[idx], {
        toValue: idx === selectedIndex ? 1 : 0,
        duration: 180,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start();
    });

    Animated.timing(sliderAnim, {
      toValue: selectedIndex,
      duration: animationDuration,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [selectedIndex, labels, scales, colors, sliderAnim, animationDuration]);

  const onSegmentLayout = (e: LayoutChangeEvent) => {
    setSegmentWidth(e.nativeEvent.layout.width);
  };

  const renderSlider = () => {
    if (segmentWidth === 0) return null;
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: PADDING,
          bottom: PADDING,
          left: PADDING,
          width: segmentWidth,
          borderRadius: calculateWidth(8),
          backgroundColor: theme.colors.white,
          zIndex: 0,
          transform: [
            {
              translateX: sliderAnim.interpolate({
                inputRange: labels.map((_, i) => i),
                outputRange: labels.map((_, i) => i * (segmentWidth + PADDING)),
              }),
            },
          ],
          shadowColor: theme.colors.greyscale[300],
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 1,
        }}
      />
    );
  };

  const renderSegments = () => {
    return labels.map((option, idx) => {
      const animatedColor = colors[idx].interpolate({
        inputRange: [0, 1],
        outputRange: [theme.colors.greyscale[600], theme.colors.primary[500]],
      });
      return (
        <TouchableOpacity
          key={`${option}-${idx}`}
          activeOpacity={0.85}
          onPress={() => onChange(idx)}
          style={{
            flex: 1,
            borderRadius: calculateWidth(8),
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
          onLayout={idx === 0 ? onSegmentLayout : undefined}
        >
          <Animated.Text
            style={{
              fontSize: calculateFontSize(14),
              fontWeight: '500',
              color: animatedColor,
              textAlign: 'center',
              transform: [{ scale: scales[idx] }],
            }}
          >
            {option}
          </Animated.Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          // TODO: background color değişecek görüntü belli olsun diye 500 e çektim normalde 50 olacak
          backgroundColor: theme.colors.greyscale[500],
          borderRadius: calculateWidth(12),
          padding: PADDING,
          gap: PADDING,
          position: 'relative',
          height: calculateHeight(40),
        },
        style,
      ]}
      {...props}
    >
      {renderSlider()}
      {renderSegments()}
    </View>
  );
}
