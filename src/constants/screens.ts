export const NAVIGATORS = {
  TAB_NAVIGATOR: 'TabNavigator',
  ONBOARDING_NAVIGATOR: 'OnboardingNavigator',
} as const

export const SCREENS = {
  HOME: 'Home',
  FAVORITES: 'Favorites',
  TICKET: 'Ticket',
  PROFILE: 'Profile',
  ONBOARDING: 'Onboarding',
  ONBOARDING_WELCOME: 'OnboardingWelcome',
  LOGIN: 'Login',
  REGISTER: 'Register',
  VERIFICATION_CODE: 'VerificationCode',
} as const

export type NavigatorNames = typeof NAVIGATORS[keyof typeof NAVIGATORS]
export type ScreenNames = typeof SCREENS[keyof typeof SCREENS] 