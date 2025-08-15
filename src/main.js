import './style.css'

// SafeKid Accessible Application
class SafeKidApp {
  constructor() {
    this.init()
  }

  init() {
    console.log('🛡️ SafeKid Accessible App initialized!')
    
    // Setup accessibility features
    this.setupKeyboardNavigation()
    this.setupScreenReaderSupport()
    this.setupAccessibleAnimations()
    this.setupButtonInteractions()
    this.setupLiveRegions()
    this.setupFocusManagement()
    
    // Setup scroll animations (respect reduced motion)
    this.setupScrollAnimations()
    
    // Setup demo interactions
    this.setupDemoMode()
  }

  // Keyboard Navigation Setup
  setupKeyboardNavigation() {
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link')
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault()
        const main = document.getElementById('main')
        if (main) {
          main.focus()
          main.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape key functionality
      if (e.key === 'Escape') {
        this.handleEscape()
      }
      
      // Arrow key navigation for cards
      if (e.target.matches('.feature-card, .trust-item, .faq-item')) {
        this.handleArrowNavigation(e)
      }
      
      // Enter/Space for custom buttons
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"]')) {
        e.preventDefault()
        e.target.click()
      }
    })

    // Tab trap for modals (if needed)
    this.setupTabTrap()
  }

  // Arrow key navigation for card grids
  handleArrowNavigation(e) {
    const cards = Array.from(document.querySelectorAll('.feature-card, .trust-item, .faq-item'))
    const currentIndex = cards.indexOf(e.target)
    let nextIndex = currentIndex

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        nextIndex = (currentIndex + 1) % cards.length
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        nextIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1
        break
      case 'Home':
        e.preventDefault()
        nextIndex = 0
        break
      case 'End':
        e.preventDefault()
        nextIndex = cards.length - 1
        break
    }

    if (nextIndex !== currentIndex) {
      cards[nextIndex].focus()
    }
  }

  // Handle Escape key
  handleEscape() {
    // Close any open modals or overlays
    const activeElement = document.activeElement
    if (activeElement && activeElement.matches('.toast')) {
      this.dismissToast(activeElement)
    }
  }

  // Tab trap for modals
  setupTabTrap() {
    // Will be implemented when modals are added
  }

  // Screen Reader Support
  setupScreenReaderSupport() {
    // Announce page load
    this.announceToScreenReader('SafeKid app loaded. Child safety landing page ready.')
    
    // Update aria-live regions for dynamic content
    this.statusUpdateTimer = setInterval(() => {
      this.updateVehicleStatus()
    }, 10000) // Update every 10 seconds for demo
  }

  // Update vehicle status for demo
  updateVehicleStatus() {
    const statusRegion = document.getElementById('vehicle-status')
    const statusUpdates = document.getElementById('status-updates')
    
    if (statusRegion && statusUpdates) {
      // Simulate status update
      const temp = 72 + Math.floor(Math.random() * 6) - 3 // 69-75°F
      const tempReading = document.querySelector('.temp-reading span')
      
      if (tempReading) {
        tempReading.textContent = `${temp}°F`
        tempReading.parentElement.setAttribute('aria-label', `Current temperature ${temp} degrees Fahrenheit`)
      }
      
      // Announce temperature change to screen readers
      statusUpdates.textContent = `Temperature updated to ${temp} degrees Fahrenheit`
    }
  }

  // Accessible Animations
  setupAccessibleAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      this.enableAnimations()
    }
    
    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        this.disableAnimations()
      } else {
        this.enableAnimations()
      }
    })
  }

  enableAnimations() {
    // Subtle phone mockup animation
    const phoneMockup = document.querySelector('.phone-mockup')
    if (phoneMockup) {
      phoneMockup.style.animation = 'float 6s ease-in-out infinite'
    }
    
    // Status indicator pulse
    const statusIndicator = document.querySelector('.status-indicator')
    if (statusIndicator) {
      statusIndicator.style.animation = 'pulse 3s ease-in-out infinite'
    }
  }

  disableAnimations() {
    const animatedElements = document.querySelectorAll('.phone-mockup, .status-indicator')
    animatedElements.forEach(el => {
      el.style.animation = 'none'
    })
  }

  // Button Interactions
  setupButtonInteractions() {
    // Primary download buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleDownload(e)
      })
    })
    
    // Secondary demo buttons
    document.querySelectorAll('.btn-secondary').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleDemo(e)
      })
    })
    
    // Store buttons
    document.querySelectorAll('.store-button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleStoreDownload(e)
      })
    })

    // Add ripple effect for visual feedback
    this.setupRippleEffects()
  }

  // Handle download action
  handleDownload(e) {
    e.preventDefault()
    
    this.announceToScreenReader('Download initiated. SafeKid app download information displayed.')
    this.showAccessibleToast('🎉 Thank you for your interest in SafeKid! The app will be available soon on both iOS and Android platforms.', 'success')
    
    // Focus management
    setTimeout(() => {
      e.target.focus()
    }, 100)
  }

  // Handle demo action
  handleDemo(e) {
    e.preventDefault()
    
    this.announceToScreenReader('Demo video information displayed.')
    this.showAccessibleToast('🎬 Demo: Watch how SafeKid protects your family with automatic detection, instant alerts, temperature monitoring, and emergency response.', 'info')
    
    // Simulate demo status change
    this.simulateDemoAlert()
    
    setTimeout(() => {
      e.target.focus()
    }, 100)
  }

  // Handle store download
  handleStoreDownload(e) {
    e.preventDefault()
    
    const isIOS = e.currentTarget.querySelector('.store-text .store-name').textContent.includes('App Store')
    const store = isIOS ? 'App Store' : 'Google Play'
    
    this.announceToScreenReader(`Redirecting to ${store} for SafeKid download.`)
    this.showAccessibleToast(`🚀 Redirecting to ${store}. SafeKid will be available soon on both iOS and Android!`, 'info')
    
    setTimeout(() => {
      e.currentTarget.focus()
    }, 100)
  }

  // Ripple Effects for Visual Feedback
  setupRippleEffects() {
    document.querySelectorAll('.btn, .store-button').forEach(button => {
      button.addEventListener('click', (e) => {
        this.createRipple(e)
      })
    })
  }

  createRipple(e) {
    const button = e.currentTarget
    const ripple = document.createElement('span')
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `
    
    button.style.position = 'relative'
    button.style.overflow = 'hidden'
    button.appendChild(ripple)
    
    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  // Live Regions for Screen Reader Announcements
  setupLiveRegions() {
    // Ensure live regions exist
    if (!document.getElementById('status-updates')) {
      const statusRegion = document.createElement('div')
      statusRegion.id = 'status-updates'
      statusRegion.className = 'live-region'
      statusRegion.setAttribute('aria-live', 'polite')
      statusRegion.setAttribute('aria-atomic', 'true')
      document.body.appendChild(statusRegion)
    }
    
    if (!document.getElementById('emergency-alerts')) {
      const emergencyRegion = document.createElement('div')
      emergencyRegion.id = 'emergency-alerts'
      emergencyRegion.className = 'live-region'
      emergencyRegion.setAttribute('aria-live', 'assertive')
      emergencyRegion.setAttribute('aria-atomic', 'true')
      document.body.appendChild(emergencyRegion)
    }
  }

  // Announce to screen reader
  announceToScreenReader(message, priority = 'polite') {
    const regionId = priority === 'assertive' ? 'emergency-alerts' : 'status-updates'
    const region = document.getElementById(regionId)
    
    if (region) {
      region.textContent = message
      // Clear after announcement
      setTimeout(() => {
        region.textContent = ''
      }, 1000)
    }
  }

  // Focus Management
  setupFocusManagement() {
    // Enhance focus visibility
    document.addEventListener('focusin', (e) => {
      if (e.target.matches('.feature-card, .trust-item, .faq-item')) {
        e.target.setAttribute('data-focused', 'true')
      }
    })
    
    document.addEventListener('focusout', (e) => {
      if (e.target.matches('.feature-card, .trust-item, .faq-item')) {
        e.target.removeAttribute('data-focused')
      }
    })
  }

  // Scroll Animations with Intersection Observer
  setupScrollAnimations() {
    if (!window.IntersectionObserver) return
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Announce section entry to screen readers
          const heading = entry.target.querySelector('h2, h3')
          if (heading) {
            this.announceToScreenReader(`Entering ${heading.textContent} section`)
          }
        }
      })
    }, observerOptions)
    
    // Observe sections
    document.querySelectorAll('.features, .trust-section, .faq, .download').forEach(section => {
      section.classList.add('fade-in')
      observer.observe(section)
    })
    
    // Observe cards
    document.querySelectorAll('.feature-card, .trust-item, .faq-item').forEach((card, index) => {
      card.classList.add('fade-in')
      card.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })
  }

  // Demo Mode
  setupDemoMode() {
    // Simulate a safety alert for demonstration
    setTimeout(() => {
      if (Math.random() < 0.3) { // 30% chance
        this.simulateSafetyDemo()
      }
    }, 5000)
  }

  simulateSafetyDemo() {
    const statusRegion = document.getElementById('vehicle-status')
    if (statusRegion) {
      // Show demo alert
      this.showAccessibleToast('🚨 Demo Alert: Child detected in vehicle! Emergency response activated.', 'error')
      this.announceToScreenReader('Demo alert activated: Child detection simulation triggered', 'assertive')
      
      // Reset after demo
      setTimeout(() => {
        this.announceToScreenReader('Demo alert resolved: Returning to normal monitoring mode')
      }, 3000)
    }
  }

  simulateDemoAlert() {
    const emergencyRegion = document.getElementById('emergency-alerts')
    if (emergencyRegion) {
      this.announceToScreenReader('Demo mode: Simulating safety features including automatic detection, instant alerts, and temperature monitoring', 'assertive')
    }
  }

  // Accessible Toast Notifications
  showAccessibleToast(message, type = 'info') {
    const toast = document.createElement('div')
    toast.className = `toast ${type}`
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status')
    toast.setAttribute('aria-atomic', 'true')
    toast.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <p style="margin: 0; flex: 1;">${message}</p>
        <button type="button" aria-label="Close notification" style="background: none; border: none; font-size: 1.2em; cursor: pointer; padding: 0; margin-left: 1rem;">&times;</button>
      </div>
    `
    
    // Close button functionality
    const closeBtn = toast.querySelector('button')
    closeBtn.addEventListener('click', () => {
      this.dismissToast(toast)
    })
    
    // Auto-dismiss for non-error toasts
    if (type !== 'error') {
      setTimeout(() => {
        this.dismissToast(toast)
      }, 5000)
    }
    
    // Add to page
    document.body.appendChild(toast)
    
    // Announce to screen reader
    this.announceToScreenReader(message, type === 'error' ? 'assertive' : 'polite')
    
    // Focus management
    setTimeout(() => {
      closeBtn.focus()
    }, 100)
  }

  dismissToast(toast) {
    if (toast && toast.parentNode) {
      toast.style.opacity = '0'
      toast.style.transform = 'translateY(20px)'
      setTimeout(() => {
        toast.remove()
      }, 300)
    }
  }

  // Cleanup
  destroy() {
    if (this.statusUpdateTimer) {
      clearInterval(this.statusUpdateTimer)
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.safeKidApp = new SafeKidApp()
})

// Add CSS for animations
const style = document.createElement('style')
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { 
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0.2);
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0.4);
      transform: scale(1.05);
    }
  }
  
  /* Enhanced focus styles */
  .feature-card[data-focused="true"],
  .trust-item[data-focused="true"],
  .faq-item[data-focused="true"] {
    outline: var(--focus-ring);
    outline-offset: 2px;
  }
  
  /* Toast animations */
  .toast {
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 0.3s ease forwards;
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* High contrast adjustments */
  @media (prefers-contrast: high) {
    .toast {
      border-width: 2px;
    }
    
    .btn:focus,
    .store-button:focus {
      outline: 3px solid currentColor;
      outline-offset: 2px;
    }
  }
  
  /* Print accessibility */
  @media print {
    .toast,
    .live-region {
      display: none !important;
    }
  }
`
document.head.appendChild(style)

// Export for testing
export default SafeKidApp