import Svg, { Path, SvgProps } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const XIcon = (props: SvgProps) => {
  const { calculateIconSize } = useResponsive()
  const size = calculateIconSize(24)

  return (
    <Svg 
      width={props.width || size} 
      height={props.height || size} 
      viewBox="0 0 10 10" 
      fill="none"
      {...props}
    >
      <Path 
        d="M9.12451 0.875198L0.874933 9.12478" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M0.875 0.875198L9.12458 9.12478" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default XIcon 