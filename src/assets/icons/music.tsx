import Svg, { Path, SvgProps } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const MusicIcon = (props: SvgProps) => {
  const { calculateIconSize } = useResponsive()
  const size = calculateIconSize(24)

  return (
    <Svg 
      width={props.width || size} 
      height={props.height || size} 
      viewBox="0 0 24 24" 
      fill="none"
      {...props}
    >
      <Path 
        d="M9 17C9 18.6569 7.65685 20 6 20C4.34315 20 3 18.6569 3 17C3 15.3431 4.34315 14 6 14C7.65685 14 9 15.3431 9 17ZM9 17V4H19V17M19 17C19 18.6569 17.6569 20 16 20C14.3431 20 13 18.6569 13 17C13 15.3431 14.3431 14 16 14C17.6569 14 19 15.3431 19 17ZM9 8H19" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MusicIcon 