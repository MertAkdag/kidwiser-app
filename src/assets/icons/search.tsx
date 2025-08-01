import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const SearchIcon = (props: SvgProps) => {
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
      <Circle 
        cx="11.7664" 
        cy="11.7666" 
        r="8.98856" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M18.0181 18.4851L21.5421 22" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon 