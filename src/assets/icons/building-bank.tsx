import Svg, { Path, SvgProps } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const BuildingBankIcon = (props: SvgProps) => {
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
      <Path d="M3 21H21" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M3 10H21" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M5 6L12 3L19 6" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M4 10V21" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M20 10V21" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M8 14V17" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M12 14V17" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M16 14V17" stroke={props.color || "#1A202C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export default BuildingBankIcon 