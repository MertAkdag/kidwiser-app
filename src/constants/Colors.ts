// constants/Colors.ts
export const Colors = {
  greyscale: {
    50: '#FAFAFA',
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
  },
  
  primary: {
    50: '#F5F6FF',
    100: '#ECEFFF',
    200: '#C3CAFF',
    300: '#9AA6FF',
    400: '#7081FF',
    500: '#455AF7',
    600: '#3144D5',
    700: '#2132B3',
    800: '#132291',
    900: '#09156F',
  },
  
  white: '#FFFFFF',
  red: '#FF6243',
  yellow: '#FFD920',
  green: '#00D394',
  purple: '#7A5BD7',
  skyblue: '#37B9E2',
  orange: '#FF7A2E',
} as const

export const theme = {
  colors: Colors,
  
  text: {
    primary: Colors.greyscale[900],
    secondary: Colors.greyscale[600],
    tertiary: Colors.greyscale[400],
    disabled: Colors.greyscale[300],
    inverse: Colors.white,
  },
  
  background: {
    primary: Colors.white,
    secondary: Colors.greyscale[50],
    tertiary: Colors.greyscale[100],
  },
  
  border: {
    primary: Colors.greyscale[200],
    secondary: Colors.greyscale[300],
    focus: Colors.primary[500],
  },
  
  status: {
    success: Colors.green,
    warning: Colors.yellow,
    error: Colors.red,
    info: Colors.skyblue,
  },
}

export type ColorValue = string
export type ThemeColors = typeof Colors
export type SemanticColors = typeof theme 