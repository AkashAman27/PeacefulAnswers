import { render } from '@testing-library/react'
import { GoogleAnalytics } from '../GoogleAnalytics'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    // Clean up any existing scripts and window properties
    const scripts = document.head.querySelectorAll('script')
    scripts.forEach(script => {
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      } catch (error) {
        // Ignore cleanup errors
      }
    })
    
    // Reset window properties
    ;(window as any).gtag = undefined
    ;(window as any).dataLayer = undefined
  })

  afterEach(() => {
    // Clean up any scripts added during tests
    const scripts = document.head.querySelectorAll('script')
    scripts.forEach(script => {
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      } catch (error) {
        // Ignore cleanup errors
      }
    })
  })

  it('renders without crashing', () => {
    render(<GoogleAnalytics GA_MEASUREMENT_ID="G-TEST123" />)
  })

  it('loads Google Analytics script when GA_MEASUREMENT_ID is provided', () => {
    render(<GoogleAnalytics GA_MEASUREMENT_ID="G-TEST123" />)
    
    // Check if the Google Analytics script was added
    const gtmScript = document.querySelector('script[src*="googletagmanager.com"]')
    expect(gtmScript).toBeTruthy()
    expect(gtmScript?.getAttribute('src')).toContain('G-TEST123')
  })

  it('does not load script when GA_MEASUREMENT_ID is not provided', () => {
    render(<GoogleAnalytics GA_MEASUREMENT_ID="" />)
    
    const gtmScript = document.querySelector('script[src*="googletagmanager.com"]')
    expect(gtmScript).toBeFalsy()
  })

  it('sets up gtag configuration correctly', () => {
    render(<GoogleAnalytics GA_MEASUREMENT_ID="G-TEST123" />)
    
    // Check if the configuration script was added
    const configScript = document.querySelector('script:not([src])')
    expect(configScript?.innerHTML).toContain('gtag')
    expect(configScript?.innerHTML).toContain('G-TEST123')
  })
})