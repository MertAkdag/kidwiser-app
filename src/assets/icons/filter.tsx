import Svg, { Path, SvgProps } from 'react-native-svg'
import { useResponsive } from '../../hooks/useResponsive'

const FilterIcon = (props: SvgProps) => {
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
      <Path d="M10.33 16.5928H4.0293" stroke={props.color || "#1A202C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M13.1406 6.90042H19.4413" stroke={props.color || "#1A202C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M8.72629 6.84625C8.72629 5.5506 7.66813 4.5 6.36314 4.5C5.05816 4.5 4 5.5506 4 6.84625C4 8.14191 5.05816 9.19251 6.36314 9.19251C7.66813 9.19251 8.72629 8.14191 8.72629 6.84625Z" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M20.0002 16.5538C20.0002 15.2581 18.9429 14.2075 17.6379 14.2075C16.3321 14.2075 15.2739 15.2581 15.2739 16.5538C15.2739 17.8494 16.3321 18.9 17.6379 18.9C18.9429 18.9 20.0002 17.8494 20.0002 16.5538Z" 
        stroke={props.color || "#1A202C"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FilterIcon 