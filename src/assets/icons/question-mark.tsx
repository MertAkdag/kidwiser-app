import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const QuestionMarkIcon: React.FC<SvgProps> = (props) => (
  <Svg
    width={8}
    height={12}
    viewBox="0 0 8 12"
    fill="none"
    {...props}
  >
    <Path
      d="M1.33325 3.3335C1.33325 2.80306 1.57908 2.29436 2.01667 1.91928C2.45425 1.54421 3.04775 1.3335 3.66659 1.3335H4.33325C4.95209 1.3335 5.54558 1.54421 5.98317 1.91928C6.42075 2.29436 6.66659 2.80306 6.66659 3.3335C6.69113 3.76633 6.57438 4.19543 6.33389 4.55615C6.09341 4.91687 5.74224 5.18968 5.33325 5.3335C4.92427 5.52525 4.57309 5.889 4.33261 6.36996C4.09213 6.85092 3.97537 7.42305 3.99992 8.00016M3.99992 10.6668V10.6735"
      stroke={props.color || "#455AF7"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default QuestionMarkIcon; 