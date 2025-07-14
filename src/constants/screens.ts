export const NAVIGATORS = {
  TAB_NAVIGATOR: 'TabNavigator',
} as const

export const SCREENS = {
  HOME: 'Home',
  FAVORITES: 'Favorites',
  TICKET: 'Ticket',
  PROFILE: 'Profile',
} as const

export type NavigatorNames = typeof NAVIGATORS[keyof typeof NAVIGATORS]
export type ScreenNames = typeof SCREENS[keyof typeof SCREENS] 