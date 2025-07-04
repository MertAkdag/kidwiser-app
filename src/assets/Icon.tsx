import React from 'react'
import { SvgProps } from 'react-native-svg'
import { Colors, theme } from '../constants/Colors'
import { useResponsive } from '../hooks/useResponsive'

// Tüm ikonları import et
import BellIcon from './icons/bellicon'
import BrandDribbbleIcon from './icons/brand-dribbble'
import BuildingBankIcon from './icons/building-bank'
import CalendarIcon from './icons/calendar'
import CameraIcon from './icons/camera'
import ChevronDownIcon from './icons/chevron-down'
import ChevronLeftIcon from './icons/chevron-left'
import ChevronRightIcon from './icons/chevron-right'
import ChevronUpIcon from './icons/chevron-up'
import EyeOffIcon from './icons/eye-off'
import FilterIcon from './icons/filter'
import HeartIcon from './icons/heart'
import Heart1Icon from './icons/heart-1'
import HomeIcon from './icons/home'
import Home1Icon from './icons/home-1'
import LockIcon from './icons/lock'
import MailIcon from './icons/mail'
import MapPinIcon from './icons/map-pin'
import MapPin1Icon from './icons/map-pin-1'
import MusicIcon from './icons/music'
import PhoneIcon from './icons/phone'
import PhoneXIcon from './icons/phone-x'
import SearchIcon from './icons/search'
import TablerBrandPaypalIcon from './icons/tabler-brand-paypal'
import TablerCheckIcon from './icons/tabler-check'
import TablerCreditCardIcon from './icons/tabler-credit-card'
import TablerPlusIcon from './icons/tabler-plus'
import TicketIcon from './icons/ticket'
import Ticket1Icon from './icons/ticket-1'
import TrashIcon from './icons/trash'
import TriangleSquareCircleIcon from './icons/triangle-square-circle'
import UserIcon from './icons/user'
import User1Icon from './icons/user-1'

// İkon haritası
const icons = {
  // Temel ikonlar
  bell: BellIcon,
  search: SearchIcon,
  home: HomeIcon,
  'home-outline': Home1Icon,
  user: UserIcon,
  'user-outline': User1Icon,
  heart: HeartIcon,
  'heart-outline': Heart1Icon,
  
  // Navigasyon
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  
  // İletişim
  mail: MailIcon,
  phone: PhoneIcon,
  'phone-x': PhoneXIcon,
  
  // Lokasyon
  'map-pin': MapPinIcon,
  'map-pin-filled': MapPin1Icon,
  
  // Eylemler
  trash: TrashIcon,
  lock: LockIcon,
  'eye-off': EyeOffIcon,
  filter: FilterIcon,
  
  // Multimedya
  camera: CameraIcon,
  music: MusicIcon,
  
  // Zaman & Organizasyon
  calendar: CalendarIcon,
  ticket: TicketIcon,
  'ticket-outline': Ticket1Icon,
  
  // Tabler ikonları
  check: TablerCheckIcon,
  plus: TablerPlusIcon,
  'credit-card': TablerCreditCardIcon,
  paypal: TablerBrandPaypalIcon,
  
  // Diğer
  'building-bank': BuildingBankIcon,
  'brand-dribbble': BrandDribbbleIcon,
  'triangle-square-circle': TriangleSquareCircleIcon,
} as const

// TypeScript tipleri
export type IconName = keyof typeof icons
export type IconProps = SvgProps & {
  name: IconName
  size?: number
  color?: string
}

// Ana ikon komponenti
export default function Icon({ name, size = 24, color = theme.text.primary, ...props }: IconProps) {
  const { calculateIconSize } = useResponsive()
  const IconComponent = icons[name]
  
  if (!IconComponent) {
    console.warn(`İkon bulunamadı: ${name}`)
    return null
  }
  
  // Responsive boyut hesaplama
  const responsiveSize = calculateIconSize(size)
  
  return <IconComponent width={responsiveSize} height={responsiveSize} color={color} {...props} />
}

// İkon listesini export et (geliştirme için yararlı)
export const availableIcons = Object.keys(icons) as IconName[]

// Theme renkleri ve yardımcı fonksiyonları export et
export { Colors, theme }
