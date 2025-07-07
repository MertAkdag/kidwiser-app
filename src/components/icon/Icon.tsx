import React from 'react'
import { SvgProps } from 'react-native-svg'
import { Colors, theme } from '../../constants/Colors'
import { useResponsive } from '../../hooks/useResponsive'

import AppleIcon from '../../assets/icons/apple'
import BellIcon from '../../assets/icons/bellicon'
import BrandDribbbleIcon from '../../assets/icons/brand-dribbble'
import BuildingBankIcon from '../../assets/icons/building-bank'
import CalendarIcon from '../../assets/icons/calendar'
import CameraIcon from '../../assets/icons/camera'
import ChevronDownIcon from '../../assets/icons/chevron-down'
import ChevronLeftIcon from '../../assets/icons/chevron-left'
import ChevronRightIcon from '../../assets/icons/chevron-right'
import ChevronUpIcon from '../../assets/icons/chevron-up'
import EyeIcon from '../../assets/icons/eye'
import EyeOffIcon from '../../assets/icons/eye-off'
import FilterIcon from '../../assets/icons/filter'
import GoogleIcon from '../../assets/icons/google'
import HeartIcon from '../../assets/icons/heart'
import Heart1Icon from '../../assets/icons/heart-1'
import HomeIcon from '../../assets/icons/home'
import Home1Icon from '../../assets/icons/home-1'
import LockIcon from '../../assets/icons/lock'
import MailIcon from '../../assets/icons/mail'
import MapPinIcon from '../../assets/icons/map-pin'
import MapPin1Icon from '../../assets/icons/map-pin-1'
import MusicIcon from '../../assets/icons/music'
import PhoneIcon from '../../assets/icons/phone'
import PhoneXIcon from '../../assets/icons/phone-x'
import SearchIcon from '../../assets/icons/search'
import TablerBrandPaypalIcon from '../../assets/icons/tabler-brand-paypal'
import TablerCheckIcon from '../../assets/icons/tabler-check'
import TablerCreditCardIcon from '../../assets/icons/tabler-credit-card'
import TablerPlusIcon from '../../assets/icons/tabler-plus'
import TicketIcon from '../../assets/icons/ticket'
import Ticket1Icon from '../../assets/icons/ticket-1'
import TrashIcon from '../../assets/icons/trash'
import TriangleSquareCircleIcon from '../../assets/icons/triangle-square-circle'
import UserIcon from '../../assets/icons/user'
import User1Icon from '../../assets/icons/user-1'

const icons = {
  bell: BellIcon,
  search: SearchIcon,
  home: HomeIcon,
  'home-outline': Home1Icon,
  user: UserIcon,
  'user-outline': User1Icon,
  heart: HeartIcon,
  'heart-outline': Heart1Icon,
  
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  
  mail: MailIcon,
  phone: PhoneIcon,
  'phone-x': PhoneXIcon,
  
  'map-pin': MapPinIcon,
  'map-pin-filled': MapPin1Icon,
  
  trash: TrashIcon,
  lock: LockIcon,
  'eye-off': EyeOffIcon,
  eye: EyeIcon,
  filter: FilterIcon,
  

  camera: CameraIcon,
  music: MusicIcon,
  

  calendar: CalendarIcon,
  ticket: TicketIcon,
  'ticket-outline': Ticket1Icon,
  

  check: TablerCheckIcon,
  plus: TablerPlusIcon,
  'credit-card': TablerCreditCardIcon,
  paypal: TablerBrandPaypalIcon,
  

  apple: AppleIcon,
  google: GoogleIcon,
  

  'building-bank': BuildingBankIcon,
  'brand-dribbble': BrandDribbbleIcon,
  'triangle-square-circle': TriangleSquareCircleIcon,
} as const

export type IconName = keyof typeof icons
export type IconProps = SvgProps & {
  name: IconName
  size?: number
  color?: string
}

export default function Icon({ name, size = 24, color = theme.text.primary, ...props }: IconProps) {
  const { calculateIconSize } = useResponsive()
  const IconComponent = icons[name]
  
  if (!IconComponent) {
    console.warn(`İkon bulunamadı: ${name}`)
    return null
  }
  
  const responsiveSize = calculateIconSize(size)
  
  return <IconComponent width={responsiveSize} height={responsiveSize} color={color} {...props} />
}

export const availableIcons = Object.keys(icons) as IconName[]

export { Colors, theme }
