import Svg, { Path, SvgProps } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const EyeIcon = (props: SvgProps) => {
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
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default EyeIcon 