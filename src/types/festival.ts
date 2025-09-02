// Festival announcement types for the ticker system

export interface FestivalAnnouncement {
  id: string
  festival_name: string
  hindi_text: string
  english_text: string
  icon: string
  link_url: string
  start_date: string
  end_date: string
  is_active: boolean
  created_at?: string
  updated_at?: string
  created_by?: string
  updated_by?: string
}

export interface TickerItem extends FestivalAnnouncement {
  displayText: string
  language: 'hi' | 'en'
}

export interface FestivalTickerProps {
  announcements?: FestivalAnnouncement[]
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export interface FestivalTickerFormData {
  festival_name: string
  hindi_text: string
  english_text: string
  icon: string
  link_url: string
  start_date: string
  end_date: string
  is_active: boolean
}

// Common festival icons
export const FESTIVAL_ICONS = {
  DIYA: '🪔',
  GANESHA: '🐘', 
  KRISHNA: '🦚',
  FLOWER: '🌺',
  OM: '🕉️',
  DRAMA: '🎭',
  CELEBRATION: '🎊',
  LOTUS: '🌸',
  STAR: '⭐',
  TRIDENT: '🔱',
  MOON: '🌙',
  SPARKLE: '🌟'
} as const

// Festival categories for better organization
export enum FestivalCategory {
  MAJOR = 'major',
  MINOR = 'minor', 
  REGIONAL = 'regional',
  SEASONAL = 'seasonal',
  VRAT = 'vrat',
  UTSAV = 'utsav'
}

// Date-related utility types
export interface FestivalDate {
  gregorian: string
  hindu_month: string
  paksha: 'shukla' | 'krishna'
  tithi: string
  significance: string
}

// Extended festival information for detailed pages
export interface FestivalDetails extends FestivalAnnouncement {
  category: FestivalCategory
  regional_names?: Record<string, string>
  ritual_items?: string[]
  food_items?: string[]
  mantras?: string[]
  stories?: string[]
  significance?: string
  date_info?: FestivalDate
  related_festivals?: string[]
  images?: string[]
  videos?: string[]
}

// API response types
export interface FestivalApiResponse {
  data: FestivalAnnouncement[]
  count: number
  error?: string
}

export interface FestivalCreateRequest {
  festival_name: string
  hindi_text: string
  english_text: string
  icon: string
  link_url: string
  start_date: string
  end_date: string
  is_active?: boolean
}

export interface FestivalUpdateRequest extends FestivalCreateRequest {
  id: string
}

// Hook return types
export interface UseFestivalAnnouncementsReturn {
  announcements: FestivalAnnouncement[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

// Admin-specific types
export interface AdminFestivalState {
  announcements: FestivalAnnouncement[]
  loading: boolean
  showForm: boolean
  editingAnnouncement: FestivalAnnouncement | null
  formData: FestivalTickerFormData
  error: string | null
  success: string | null
}

export interface AdminFestivalActions {
  fetchAnnouncements: () => Promise<void>
  createAnnouncement: (data: FestivalCreateRequest) => Promise<void>
  updateAnnouncement: (data: FestivalUpdateRequest) => Promise<void>
  deleteAnnouncement: (id: string) => Promise<void>
  setShowForm: (show: boolean) => void
  setEditingAnnouncement: (announcement: FestivalAnnouncement | null) => void
  resetForm: () => void
}