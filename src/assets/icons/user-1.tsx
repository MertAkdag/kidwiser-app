import Svg, { Path, SvgProps } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const User1Icon = (props: SvgProps) => {
  const { calculateIconSize } = useResponsive()
  const size = calculateIconSize(24)

  return (
    <Svg 
      width={props.width || size} 
      height={props.height || size} 
      viewBox="0 0 14 20" 
      fill="none"
      {...props}
    >
      <Path 
        d="M7 9C9.20914 9 11 7.20914 11 5C11 2.79086 9.20914 1 7 1C4.79086 1 3 2.79086 3 5C3 7.20914 4.79086 9 7 9Z" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default User1Icon 