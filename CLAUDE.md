# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SafeKid SPA (Single Page Application) - a landing page for a mobile app that helps parents remember their children in the car. The project has been transformed from a generic Vite boilerplate into an Apple-inspired marketing website.

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

## Architecture

### Design System
- **Apple-inspired design language**: Uses -apple-system font stack, glassmorphism effects, gradient backgrounds, and smooth animations
- **Responsive design**: Mobile-first approach with breakpoints at 768px
- **Color scheme**: Gradients, glass morphism effects, and Apple's signature color palette
- **Animation system**: CSS keyframes for floating, pulse, and ripple effects

### Code Structure
- **Single-file approach**: All styles in `src/style.css`, all JavaScript in `src/main.js`
- **Vanilla JavaScript**: No framework dependencies, uses modern DOM APIs and Intersection Observer
- **CSS organization**: Structured with sections for Hero, Features, Download, and responsive design
- **Interactive elements**: Custom ripple effects, scroll-triggered animations, and enhanced hover states

### Key Components
1. **Hero Section**: Main landing area with product title, phone mockup, and CTA buttons
2. **Features Grid**: Four safety features in a responsive grid layout
3. **Download Section**: App store buttons with dark background
4. **Phone Mockup**: Animated 3D-style phone showing app interface

### Animation Strategy
- **Intersection Observer**: For scroll-triggered fade-in animations on feature cards
- **CSS transforms**: For hover effects and button interactions
- **Dynamic styling**: JavaScript-injected CSS for ripple effects and floating animations
- **Smooth scrolling**: Enabled globally for better UX

### Interactive Features
- Ripple effects on all button clicks
- Scroll-triggered animations for sections
- Phone mockup floating animation
- Status indicator pulsing effect
- Alert dialogs for demo interactions (placeholder for actual functionality)

## Development Notes

- The project currently shows placeholder content and demo alerts for app store links
- Phone mockup displays a simplified version of the actual SafeKid app interface
- All interactions are frontend-only with no backend dependencies
- Vite configuration includes source maps and manual chunk splitting for vendor code
- after each code change, make sure to commit and push it