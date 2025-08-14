import './style.css'

// Initialize the counter
let counter = 0

// Get DOM elements
const counterBtn = document.getElementById('counter-btn')
const counterDisplay = document.getElementById('counter')

// Update counter display
function updateCounter() {
  counterDisplay.textContent = counter
}

// Add click event listener
counterBtn.addEventListener('click', () => {
  counter++
  updateCounter()
})

// Initialize the app
function init() {
  console.log('🚀 Vite SPA Boilerplate initialized!')
  updateCounter()
}

// Start the application
init()