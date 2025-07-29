export const NAVIGATORS = {
  TAB_NAVIGATOR: 'TabNavigator',
  ONBOARDING_NAVIGATOR: 'OnboardingNavigator',
  AUTH_NAVIGATOR: 'AuthNavigator',
  EVENT_NAVIGATOR: 'EventNavigator',
} as const

export const SCREENS = {
  HOME: 'Home',
  FAVORITES: 'Favorites',
  TICKET: 'Ticket',
  PROFILE: 'Profile',
  SEARCH: 'Search',
  ONBOARDING: 'Onboarding',
  ONBOARDING_WELCOME: 'OnboardingWelcome',
  LOGIN: 'Login',
  REGISTER: 'Register',
  VERIFICATION_CODE: 'VerificationCode',
  FORGOT_PASSWORD: 'ForgotPassword',
  RESET_PASSWORD_EMAIL: 'ResetPasswordEmail',
  RESET_PASSWORD_PHONE: 'ResetPasswordPhone',
  FORGOT_PASSWORD_VERIFICATION: 'ForgotPasswordVerification',
  NEW_PASSWORD: 'NewPassword',
  PASSWORD_RESET_SUCCESS: 'PasswordResetSuccess',
  EVENT_DETAIL: 'EventDetail',
} as const

export type NavigatorNames = typeof NAVIGATORS[keyof typeof NAVIGATORS]
export type ScreenNames = typeof SCREENS[keyof typeof SCREENS] 