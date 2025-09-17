/**
 * Comprehensive Test Suite for Deity Edit Page
 * 
 * This test suite covers all the key functionality of the deity edit page:
 * 1. Page loading with existing deity ID
 * 2. Form pre-population with existing data from database
 * 3. JSONB fields loading and manipulation
 * 4. Form submission and database updates
 * 5. Error handling for invalid deity IDs
 * 6. Navigation and UI components
 * 7. All tabs and form sections
 * 8. JSONB array manipulation (add/remove items)
 */

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditDeity from '../page'
import { hinduSupabase } from '@/lib/supabase'

// Mock data matching the actual database structure
const mockDeityData = {
  id: '5bde1069-c12e-4b64-b3e4-6b06b001a388',
  name: 'Krishna',
  sanskrit_name: 'कृष्ण',
  slug: 'krishna',
  category_id: 'category-1',
  title: 'The Divine Cowherd',
  subtitle: 'Teacher of Bhagavad Gita and embodiment of divine love',
  description: 'Krishna is one of the most widely revered deities in Hinduism.',
  mythology_story: 'Krishna was born in Mathura, raised in Vrindavan...',
  featured_image_url: 'https://example.com/krishna.jpg',
  featured_image_alt: 'Lord Krishna image',
  hero_image_url: 'https://example.com/krishna-hero.jpg',
  hero_image_alt: 'Krishna hero image',
  divine_attributes: [
    {
      icon: 'Heart',
      title: 'Divine Love',
      description: 'Embodiment of unconditional love and devotion'
    },
    {
      icon: 'Music',
      title: 'Divine Flute',
      description: 'Sacred music that enchants all beings'
    }
  ],
  mantras: [
    {
      sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे',
      transliteration: 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare',
      meaning: 'Great mantra for liberation',
      purpose: 'Divine love and spiritual awakening'
    }
  ],
  festivals: [
    {
      name: 'Krishna Janmashtami',
      date: 'August/September',
      description: 'Celebration of Krishna birth with fasting, prayers, midnight celebrations',
      significance: 'Divine birth commemoration'
    }
  ],
  sacred_places: [
    {
      name: 'Vrindavan',
      location: 'Uttar Pradesh, India',
      description: 'Krishna childhood playground with numerous temples',
      image: 'https://example.com/vrindavan.jpg'
    }
  ],
  consorts: ['Radha', 'Rukmini'],
  parents: ['Vasudeva', 'Devaki'],
  children: ['Pradyumna'],
  avatar_of: 'Vishnu',
  form_of: 'Supreme Brahman',
  era: 'Dwapara Yuga',
  yuga: 'Dwapara',
  meta_title: 'Krishna - The Divine Cowherd',
  meta_description: 'Learn about Lord Krishna, the eighth avatar of Vishnu',
  status: 'published',
  is_featured: true
}

const mockCategories = [
  { id: 'category-1', name: 'Major Deities' },
  { id: 'category-2', name: 'Avatars' }
]

// Mock implementations
const mockPush = jest.fn()
const mockBack = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: mockBack,
  }),
  useParams: () => ({ id: '5bde1069-c12e-4b64-b3e4-6b06b001a388' }),
}))

// Mock Supabase client
jest.mock('@/lib/supabase', () => ({
  hinduSupabase: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn(),
      update: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
    })),
  },
}))

describe('EditDeity Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Page Loading and Data Fetching', () => {
    test('displays loading state initially', async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      ;(hinduSupabase.from as jest.Mock).mockReturnValue(mockSupabaseChain)

      render(<EditDeity />)

      expect(screen.getByText('Loading deity data...')).toBeInTheDocument()
    })

    test('loads and displays existing deity data correctly', async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      // Mock categories fetch
      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain) // For deity fetch
        .mockReturnValueOnce(mockCategoriesChain) // For categories fetch

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
        expect(screen.getByDisplayValue('कृष्ण')).toBeInTheDocument()
        expect(screen.getByDisplayValue('krishna')).toBeInTheDocument()
        expect(screen.getByDisplayValue('The Divine Cowherd')).toBeInTheDocument()
      })
    })

    test('handles non-existent deity ID with proper error message', async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ 
          data: null, 
          error: { code: 'PGRST116', message: 'Row not found' } 
        }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain) // For deity fetch
        .mockReturnValueOnce(mockCategoriesChain) // For categories fetch

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByText('Deity not found')).toBeInTheDocument()
        expect(screen.getByText('Back to Deities')).toBeInTheDocument()
      })
    })

    test('handles database errors gracefully', async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ 
          data: null, 
          error: { code: 'PGRST301', message: 'Database connection error' } 
        }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain) // For deity fetch
        .mockReturnValueOnce(mockCategoriesChain) // For categories fetch

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByText('Error loading deity data')).toBeInTheDocument()
      })
    })
  })

  describe('Form Pre-population and JSONB Fields', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('pre-populates basic form fields correctly', () => {
      expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      expect(screen.getByDisplayValue('कृष्ण')).toBeInTheDocument()
      expect(screen.getByDisplayValue('krishna')).toBeInTheDocument()
      expect(screen.getByDisplayValue('The Divine Cowherd')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Teacher of Bhagavad Gita and embodiment of divine love')).toBeInTheDocument()
    })

    test('loads and displays divine attributes correctly', async () => {
      // Navigate to attributes tab
      fireEvent.click(screen.getByText('Attributes'))

      await waitFor(() => {
        expect(screen.getByText('Attribute #1')).toBeInTheDocument()
        expect(screen.getByText('Attribute #2')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Divine Love')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Divine Flute')).toBeInTheDocument()
      })
    })

    test('loads and displays mantras correctly', async () => {
      // Navigate to worship tab
      fireEvent.click(screen.getByText('Worship'))

      await waitFor(() => {
        expect(screen.getByText('Mantra #1')).toBeInTheDocument()
        expect(screen.getByDisplayValue('हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Hare Krishna Hare Krishna Krishna Krishna Hare Hare')).toBeInTheDocument()
      })
    })

    test('loads and displays festivals correctly', async () => {
      fireEvent.click(screen.getByText('Worship'))

      await waitFor(() => {
        expect(screen.getByText('Festival #1')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Krishna Janmashtami')).toBeInTheDocument()
        expect(screen.getByDisplayValue('August/September')).toBeInTheDocument()
      })
    })

    test('loads and displays sacred places correctly', async () => {
      fireEvent.click(screen.getByText('Places'))

      await waitFor(() => {
        expect(screen.getByText('Sacred Place #1')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Vrindavan')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Uttar Pradesh, India')).toBeInTheDocument()
      })
    })

    test('loads string arrays (consorts, parents, children) correctly', async () => {
      fireEvent.click(screen.getByText('Relations'))

      await waitFor(() => {
        expect(screen.getByDisplayValue('Radha')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Rukmini')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Vasudeva')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Devaki')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Pradyumna')).toBeInTheDocument()
      })
    })
  })

  describe('Tab Navigation and UI Components', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('navigates between all tabs correctly', () => {
      const tabs = ['Basic Info', 'Images', 'Attributes', 'Worship', 'Places', 'Relations', 'SEO']
      
      tabs.forEach(tab => {
        const tabButton = screen.getByText(tab)
        expect(tabButton).toBeInTheDocument()
        
        fireEvent.click(tabButton)
        expect(tabButton).toHaveClass('text-orange-600')
      })
    })

    test('displays all required form sections in each tab', () => {
      // Basic Info tab
      expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      expect(screen.getByDisplayValue('कृष्ण')).toBeInTheDocument()
      expect(screen.getByDisplayValue('krishna')).toBeInTheDocument()

      // Images tab
      fireEvent.click(screen.getByText('Images'))
      expect(screen.getByDisplayValue('https://example.com/krishna.jpg')).toBeInTheDocument()
      expect(screen.getByDisplayValue('https://example.com/krishna-hero.jpg')).toBeInTheDocument()

      // SEO tab
      fireEvent.click(screen.getByText('SEO'))
      expect(screen.getByDisplayValue('Krishna - The Divine Cowherd')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Learn about Lord Krishna, the eighth avatar of Vishnu')).toBeInTheDocument()
    })

    test('shows header with correct deity name and navigation buttons', () => {
      expect(screen.getByText('Edit Deity: Krishna')).toBeInTheDocument()
      expect(screen.getByText('Update comprehensive information about this Hindu deity')).toBeInTheDocument()
      expect(screen.getByText('Cancel')).toBeInTheDocument()
      expect(screen.getByText('Save Draft')).toBeInTheDocument()
      expect(screen.getByText('Update & Publish')).toBeInTheDocument()
    })
  })

  describe('JSONB Array Manipulation', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('can add new divine attributes', async () => {
      fireEvent.click(screen.getByText('Attributes'))

      const addButton = screen.getByText('Add Attribute')
      fireEvent.click(addButton)

      await waitFor(() => {
        expect(screen.getByText('Attribute #3')).toBeInTheDocument()
      })
    })

    test('can remove divine attributes', async () => {
      fireEvent.click(screen.getByText('Attributes'))

      await waitFor(() => {
        expect(screen.getByText('Attribute #1')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Divine Love')).toBeInTheDocument()
      })

      // Find and click the remove button for the first attribute
      const removeButtons = screen.getAllByRole('button').filter(button => {
        const svg = button.querySelector('svg')
        return svg && svg.classList.contains('lucide-x')
      })
      
      expect(removeButtons.length).toBeGreaterThan(0)
      fireEvent.click(removeButtons[0])

      await waitFor(() => {
        // After removing, we should have one less attribute
        expect(screen.queryByDisplayValue('Divine Love')).not.toBeInTheDocument()
      })
    })

    test('can add new mantras', async () => {
      fireEvent.click(screen.getByText('Worship'))

      const addMantraButton = screen.getByText('Add Mantra')
      fireEvent.click(addMantraButton)

      await waitFor(() => {
        expect(screen.getByText('Mantra #2')).toBeInTheDocument()
      })
    })

    test('can add new festivals', async () => {
      fireEvent.click(screen.getByText('Worship'))

      const addFestivalButton = screen.getByText('Add Festival')
      fireEvent.click(addFestivalButton)

      await waitFor(() => {
        expect(screen.getByText('Festival #2')).toBeInTheDocument()
      })
    })

    test('can add new sacred places', async () => {
      fireEvent.click(screen.getByText('Places'))

      const addPlaceButton = screen.getByText('Add Place')
      fireEvent.click(addPlaceButton)

      await waitFor(() => {
        expect(screen.getByText('Sacred Place #2')).toBeInTheDocument()
      })
    })

    test('can add string array items (consorts, parents, children)', async () => {
      fireEvent.click(screen.getByText('Relations'))

      // Test adding consort
      const consortInput = screen.getByPlaceholderText('Add consort')
      await userEvent.type(consortInput, 'New Consort')
      await userEvent.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByDisplayValue('New Consort')).toBeInTheDocument()
      })
    })
  })

  describe('Form Submission and Database Updates', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('successfully submits form and updates database', async () => {
      const mockUpdateChain = {
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: { ...mockDeityData, name: 'Updated Krishna' }, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock).mockReturnValue(mockUpdateChain)

      // Update a field
      const nameInput = screen.getByDisplayValue('Krishna')
      await userEvent.clear(nameInput)
      await userEvent.type(nameInput, 'Updated Krishna')

      // Submit form
      const submitButton = screen.getByText('Update & Publish')
      fireEvent.click(submitButton)

      await waitFor(() => {
        expect(mockUpdateChain.update).toHaveBeenCalled()
        expect(mockUpdateChain.eq).toHaveBeenCalledWith('id', '5bde1069-c12e-4b64-b3e4-6b06b001a388')
        expect(mockPush).toHaveBeenCalledWith('/admin/deities')
      })
    })

    test('handles form submission errors gracefully', async () => {
      const mockUpdateChain = {
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ 
          data: null, 
          error: { code: 'PGRST301', message: 'Database update error' } 
        }),
      }

      ;(hinduSupabase.from as jest.Mock).mockReturnValue(mockUpdateChain)
      
      // Mock window.alert
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})

      const submitButton = screen.getByText('Update & Publish')
      fireEvent.click(submitButton)

      await waitFor(() => {
        expect(alertSpy).toHaveBeenCalledWith('Error updating deity. Please try again.')
      })

      alertSpy.mockRestore()
    })

    test('saves as draft correctly', async () => {
      const mockUpdateChain = {
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: { ...mockDeityData, status: 'draft' }, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock).mockReturnValue(mockUpdateChain)

      // Click Save Draft button to set status to draft
      const saveDraftButton = screen.getByText('Save Draft')
      fireEvent.click(saveDraftButton)

      // Then submit the form by clicking the form submit button
      const form = document.querySelector('#deity-form')
      expect(form).toBeInTheDocument()
      
      fireEvent.submit(form!)

      // Wait for the form to be submitted
      await waitFor(() => {
        expect(mockUpdateChain.update).toHaveBeenCalled()
      }, { timeout: 3000 })

      // The status should be set to draft before submission
      const updateCallArgs = mockUpdateChain.update.mock.calls[0][0]
      expect(updateCallArgs.status).toBe('draft')
    })

    test('sets published_at when publishing', async () => {
      const mockUpdateChain = {
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: { ...mockDeityData, status: 'published' }, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock).mockReturnValue(mockUpdateChain)

      const publishButton = screen.getByText('Update & Publish')
      fireEvent.click(publishButton)

      await waitFor(() => {
        expect(mockUpdateChain.update).toHaveBeenCalled()
        const updateCall = mockUpdateChain.update.mock.calls[0][0]
        expect(updateCall.status).toBe('published')
        expect(updateCall.published_at).toBeDefined()
      })
    })
  })

  describe('Form Validation and User Interactions', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('updates form fields correctly when user types', async () => {
      const descriptionField = screen.getByDisplayValue('Krishna is one of the most widely revered deities in Hinduism.')
      
      await userEvent.clear(descriptionField)
      await userEvent.type(descriptionField, 'New description for Krishna')
      
      expect(screen.getByDisplayValue('New description for Krishna')).toBeInTheDocument()
    })

    test('toggles featured checkbox correctly', async () => {
      const featuredCheckbox = screen.getByLabelText('Feature this deity') as HTMLInputElement
      expect(featuredCheckbox.checked).toBe(true)
      
      fireEvent.click(featuredCheckbox)
      expect(featuredCheckbox.checked).toBe(false)
      
      fireEvent.click(featuredCheckbox)
      expect(featuredCheckbox.checked).toBe(true)
    })

    test('shows loading state during form submission', async () => {
      // Create a promise that won't resolve immediately
      let resolveUpdate: (value: unknown) => void
      const updatePromise = new Promise(resolve => {
        resolveUpdate = resolve
      })

      const mockUpdateChain = {
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockReturnValue(updatePromise),
      }

      ;(hinduSupabase.from as jest.Mock).mockReturnValue(mockUpdateChain)

      const submitButton = screen.getByText('Update & Publish')
      fireEvent.click(submitButton)

      // Check loading state
      expect(screen.getByText('Saving...')).toBeInTheDocument()
      expect(submitButton).toBeDisabled()

      // Resolve the promise
      resolveUpdate({ data: mockDeityData, error: null })

      await waitFor(() => {
        expect(screen.queryByText('Saving...')).not.toBeInTheDocument()
      })
    })

    test('character count works for meta fields', async () => {
      fireEvent.click(screen.getByText('SEO'))

      const metaTitleField = screen.getByDisplayValue('Krishna - The Divine Cowherd')
      await userEvent.clear(metaTitleField)
      await userEvent.type(metaTitleField, 'Test Title')

      expect(screen.getByText('10/60 characters')).toBeInTheDocument()
    })
  })

  describe('Image Preview Functionality', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('shows image preview when featured image URL is provided', async () => {
      fireEvent.click(screen.getByText('Images'))

      await waitFor(() => {
        const previewImage = screen.getByAltText('Lord Krishna image')
        expect(previewImage).toBeInTheDocument()
        expect(previewImage).toHaveAttribute('src', expect.stringContaining('krishna.jpg'))
      })
    })

    test('hides broken images', async () => {
      fireEvent.click(screen.getByText('Images'))

      await waitFor(() => {
        const previewImage = screen.getByAltText('Lord Krishna image')
        
        // Simulate image error
        fireEvent.error(previewImage)
        
        expect(previewImage).toHaveStyle('display: none')
      })
    })
  })

  describe('SEO Preview', () => {
    beforeEach(async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })
    })

    test('displays SEO preview with correct information', async () => {
      const mockSupabaseChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: mockDeityData, error: null }),
        order: jest.fn().mockReturnThis(),
      }

      const mockCategoriesChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: mockCategories, error: null }),
      }

      ;(hinduSupabase.from as jest.Mock)
        .mockReturnValueOnce(mockSupabaseChain)
        .mockReturnValueOnce(mockCategoriesChain)

      render(<EditDeity />)

      await waitFor(() => {
        expect(screen.getByDisplayValue('Krishna')).toBeInTheDocument()
      })

      fireEvent.click(screen.getByText('SEO'))

      await waitFor(() => {
        expect(screen.getByText('SEO Preview')).toBeInTheDocument()
        expect(screen.getByText('peacefulanswers.com/deities/krishna')).toBeInTheDocument()
      })
    })
  })
})