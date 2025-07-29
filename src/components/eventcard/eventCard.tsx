import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Icon from '../icon/Icon';

export interface EventData {
  id: string;
  title: string;
  date: string;
  time?: string; 
  location?: string;
  imageUrl: string;
  attendeeCount?: number;
  attendeeAvatars?: ImageSourcePropType[];
}

export interface EventCardProps extends Omit<TouchableOpacityProps, 'onPress'> {
  event: EventData;
  variant?: 'featured' | 'featured-bordered' | 'list';
  onPress?: (id: string) => void;
  showAttendees?: boolean;
  liked?: boolean;
  onLikeChange?: (liked: boolean) => void;
}

export default function EventCard({
  event,
  variant = 'featured',
  onPress,
  showAttendees = true,
  liked,
  onLikeChange,
  ...props
}: EventCardProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();
  const padding = calculateWidth(16);
  const borderRadius = calculateWidth(24);
  const imageHeight = calculateHeight(141);
  const avatarOverlapOffset = -12;


  const [isLiked, setIsLiked] = React.useState<boolean>(liked ?? false);

  React.useEffect(() => {
    if (liked !== undefined) {
      setIsLiked(liked);
    }
  }, [liked]);

  const toggleLike = () => {
    const newVal = !isLiked;
    setIsLiked(newVal);
    onLikeChange?.(newVal);
  };
  if (variant === 'list') {
    const imageSize = calculateWidth(64);

    const listStyles = {
      container: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        backgroundColor: theme.colors.white,
        borderRadius: calculateWidth(16),
        padding: calculateWidth(16),
        marginVertical: calculateHeight(8),
        shadowColor: theme.colors.greyscale[900],
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 12,
        elevation: 2,
        position: 'relative' as const,
      } as ViewStyle,
      imageWrapper: {
        width: imageSize,
        height: imageSize,
        borderRadius: calculateWidth(12),
        backgroundColor: theme.colors.greyscale[100],
        overflow: 'hidden' as const,
      } as ViewStyle,
    };

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onPress?.(event.id)}
        style={listStyles.container}
        {...props}
      >
        <View style={listStyles.imageWrapper}>
          <Image
            source={event.imageUrl as ImageSourcePropType}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' } as ImageStyle}
          />
        </View>

        <View style={{ flex: 1, marginLeft: calculateWidth(16) }}>
          <Text
            style={{
              fontSize: calculateFontSize(14),
              fontWeight: '500',
              fontFamily: 'SFProDisplay-Regular',
              color: theme.colors.primary[500],
              marginBottom: calculateHeight(4),
            }}
          >
            {event.time ? `${event.date} - ${event.time}` : event.date}
          </Text>

          <Text
            style={{
              fontSize: calculateFontSize(15),
              fontWeight: '700',
              fontFamily: 'SFProDisplay-Bold',
              color: theme.colors.greyscale[900],
              lineHeight: calculateHeight(20),
              marginRight: calculateWidth(80),
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {event.title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={toggleLike}
          activeOpacity={0.8}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{
            position: 'absolute',
            top: calculateHeight(12),
            right: calculateWidth(16),
          }}
        >
          <Icon
            name={isLiked ? 'heart' : 'heart-outline'}
            size={calculateWidth(24)}
            color={isLiked ? theme.colors.red : theme.colors.greyscale[500]}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  const [day, month] = React.useMemo(() => event.date.split(' '), [event.date]);

  const getDateBoxStyles = () => {
    const baseStyle = {
      position: 'absolute' as const,
      top: calculateHeight(12),
      right: calculateWidth(12),
      backgroundColor: theme.colors.white,
      shadowColor: theme.colors.greyscale[900],
      shadowOpacity: 0.15,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: 12,
      elevation: 8,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    };

    if (variant === 'featured') {
      return {
        ...baseStyle,
        width: calculateWidth(40),
        height: calculateWidth(40),
        borderRadius: calculateWidth(8),
        
      };
    } else { 
      return {
        ...baseStyle,
        width: calculateWidth(55),
        height: calculateWidth(33),
        borderRadius: calculateWidth(8),
      };
    }
  };

  const cardStyles = {
    container: {
      backgroundColor: theme.colors.white,
      borderRadius,
      width: '100%',
      marginVertical: calculateHeight(15),
      marginHorizontal: calculateWidth(2),
      overflow: 'hidden',
    } as ViewStyle,
    imageWrapper: {
      height: imageHeight,
      backgroundColor: theme.colors.greyscale[100],
    } as ViewStyle,
  };

  const dateBoxStyles = getDateBoxStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress?.(event.id)}
      style={cardStyles.container}
      {...props}
    >
      <View style={cardStyles.imageWrapper}>
        <Image
          source={event.imageUrl as ImageSourcePropType}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' } as ImageStyle}
        />
        <View style={dateBoxStyles}>
          {variant === 'featured' ? (
            <>
              <Text
                style={{
                  fontSize: calculateFontSize(14),
                  fontWeight: '700',
                  fontFamily: 'SFProDisplay-Bold',
                  color: theme.text.primary,
                  lineHeight: calculateHeight(16),
                }}
              >
                {day}
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSize(11),
                  fontWeight: '500',
                  fontFamily: 'SFProDisplay-Regular',
                  color: theme.colors.greyscale[700],
                }}
              >
                {month}
              </Text>
            </>
          ) : (
            <Text
              style={{
                fontSize: calculateFontSize(13),
                fontWeight: '700',
                fontFamily: 'SFProDisplay-Bold',
                color: theme.colors.greyscale[900],
              }}
            >
              {event.date}
            </Text>
          )}
          </View>
      </View>
      <View
        style={{
          padding,
          backgroundColor: theme.colors.white,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: calculateHeight(4),
        }}>
          <Text
            style={{
              flex: 1,
              fontSize: calculateFontSize(16),
              fontWeight: '700',
              fontFamily: 'SFProDisplay-Bold',
              color: theme.text.primary,
            }}
          >
            {event.title}
          </Text>

          {showAttendees && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: calculateWidth(8),
              }}
            >
              <View style={{ flexDirection: 'row', marginRight: calculateWidth(8) }}>
                {event.attendeeAvatars?.slice(0, 2).map((avatar, i) => (
                  <Image
                    key={i}
                    source={avatar}
                    style={{
                      width: calculateWidth(32),
                      height: calculateWidth(32),
                      borderRadius: calculateWidth(14),
                      borderWidth: 2,
                      borderColor: theme.colors.white,
                      marginLeft: i > 0 ? calculateWidth(avatarOverlapOffset) : 0,
                    }}
                  />
                )
                )}
              </View>

              {event.attendeeCount && (
                <View
                  style={{
                    backgroundColor: theme.colors.primary[500],
                    width: calculateWidth(32),
                    height: calculateWidth(32),
                    borderRadius: calculateWidth(16),
                    borderColor: theme.colors.white,
                    borderWidth: 2,
                    alignItems: 'center',
                    marginLeft: calculateWidth(-20),
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontWeight: '500',
                      fontFamily: 'SFProDisplay-Medium',
                      fontSize: calculateFontSize(14),
                    }}
                  >
                    {event.attendeeCount}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>

        {event.location && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: calculateHeight(3),
            }}
          >
            <Icon
              name="map-pin-outline"
              size={calculateWidth(14)}
              color={theme.colors.greyscale[500]}
              style={{ marginRight: calculateWidth(4)}}
            />
            <Text
              style={{
                fontSize: calculateFontSize(13),
                fontWeight: '400',
                fontFamily: 'SFProDisplay-Regular',
                color: theme.colors.greyscale[500],
              }}
            >
              {event.location}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
