import './style.css'

// Initialize the SafeKid app
function init() {
  console.log('🛡️ SafeKid App initialized!')
  
  // Add smooth scroll behavior for better UX
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Add intersection observer for animations
  setupAnimations()
  
  // Setup button interactions
  setupButtonInteractions()
  
  // Add phone mockup animation
  animatePhoneMockup()
}

// Setup animations when elements come into view
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)
  
  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(30px)'
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(card)
  })
  
  // Observe download section
  const downloadSection = document.querySelector('.download-content')
  if (downloadSection) {
    downloadSection.style.opacity = '0'
    downloadSection.style.transform = 'translateY(30px)'
    downloadSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
    observer.observe(downloadSection)
  }
}

// Setup button interactions with enhanced feedback
function setupButtonInteractions() {
  // Primary buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Create ripple effect
      createRippleEffect(e.target, e)
      
      // Show download modal or redirect
      setTimeout(() => {
        showDownloadInfo()
      }, 300)
    })
  })
  
  // Secondary buttons
  document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      createRippleEffect(e.target, e)
      
      // Show demo modal
      setTimeout(() => {
        showDemoInfo()
      }, 300)
    })
  })
  
  // Store buttons
  document.querySelectorAll('.store-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      createRippleEffect(e.target, e)
      
      // Simulate store redirect
      setTimeout(() => {
        const isIOS = btn.classList.contains('ios')
        showStoreRedirect(isIOS ? 'App Store' : 'Google Play')
      }, 300)
    })
  })
}

// Create ripple effect on button click
function createRippleEffect(button, event) {
  const ripple = document.createElement('span')
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  ripple.style.width = ripple.style.height = size + 'px'
  ripple.style.left = x + 'px'
  ripple.style.top = y + 'px'
  ripple.style.position = 'absolute'
  ripple.style.borderRadius = '50%'
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  ripple.style.transform = 'scale(0)'
  ripple.style.animation = 'ripple 0.6s linear'
  ripple.style.pointerEvents = 'none'
  
  button.style.position = 'relative'
  button.style.overflow = 'hidden'
  button.appendChild(ripple)
  
  setTimeout(() => {
    ripple.remove()
  }, 600)
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style')
rippleStyle.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`
document.head.appendChild(rippleStyle)

// Animate phone mockup with subtle effects
function animatePhoneMockup() {
  const phoneMockup = document.querySelector('.phone-mockup')
  const statusIndicator = document.querySelector('.status-indicator')
  
  if (phoneMockup) {
    // Add floating animation
    phoneMockup.style.animation = 'float 6s ease-in-out infinite'
    
    // Add breathing effect to status indicator
    if (statusIndicator) {
      statusIndicator.style.animation = 'pulse 3s ease-in-out infinite'
    }
  }
}

// Add floating and pulse animations
const animationStyle = document.createElement('style')
animationStyle.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { box-shadow: 0 8px 32px rgba(52, 199, 89, 0.3); }
    50% { box-shadow: 0 8px 32px rgba(52, 199, 89, 0.6); }
  }
`
document.head.appendChild(animationStyle)

// Show download information
function showDownloadInfo() {
  alert('🎉 Thank you for your interest in SafeKid!\n\nThe app will be available soon on both iOS and Android platforms.\n\nStay tuned for updates!')
}

// Show demo information
function showDemoInfo() {
  alert('🎬 Demo Video\n\nWatch how SafeKid works to protect your family:\n\n• Automatic detection when you leave your vehicle\n• Instant alerts if a child is detected\n• Temperature monitoring and emergency alerts\n• Simple setup and reliable operation')
}

// Show store redirect information
function showStoreRedirect(storeName) {
  alert(`🚀 Redirecting to ${storeName}\n\nYou would normally be redirected to the ${storeName} to download SafeKid.\n\nComing soon to both iOS and Android!`)
}

// Add smooth hover effects to feature cards
function enhanceFeatureCards() {
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
  init()
  enhanceFeatureCards()
})