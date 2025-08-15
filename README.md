# SafeKid - Accessible Child Safety Landing Page

A modern, accessible, high-performance landing page for SafeKid child safety technology, built with WCAG 2.1 AA compliance and award-quality design standards.

## 🎯 Project Overview

SafeKid is an advanced child safety system that prevents hot car tragedies through real-time monitoring and instant alerts. This landing page showcases the product with a focus on accessibility, performance, and user experience.

## ✨ Features

### Accessibility (WCAG 2.1 AA Compliant)
- **Skip Navigation**: Jump to main content for keyboard users
- **Screen Reader Support**: Comprehensive ARIA labels and live regions
- **Keyboard Navigation**: Full keyboard operability with arrow key card navigation
- **High Contrast Support**: Respects system preferences for contrast
- **Reduced Motion**: Honors user motion preferences
- **Focus Management**: Visible focus indicators and proper tab order
- **Semantic HTML**: Proper heading hierarchy and landmark regions

### Design System
- **CSS Variables**: Comprehensive design tokens for colors, spacing, typography
- **Mobile-First Responsive**: 360px to 1440px breakpoint coverage
- **Component Library**: Reusable Button, Card, Badge, and Toast components
- **Typography**: Inter font with optimized loading and fallbacks
- **Color Contrast**: All text meets or exceeds 4.5:1 ratio requirement

### Performance
- **Optimized Assets**: SVG icons, efficient CSS, minimal JavaScript
- **Lazy Loading**: Intersection Observer for scroll animations
- **Font Display Swap**: Prevents layout shift during font load
- **Preconnected Fonts**: Optimized Google Fonts loading
- **Modern CSS**: Uses CSS Grid, Flexbox, and CSS custom properties

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
```bash
npm run dev
```
Opens at http://localhost:5173

## 🧪 Testing & Quality Assurance

### Automated Testing

#### Accessibility Testing with axe-core
```bash
# Install axe-core CLI globally
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:5173 --exit
```

#### Lighthouse Performance Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run performance audit
lighthouse http://localhost:5173 --view --preset=desktop
lighthouse http://localhost:5173 --view --preset=mobile
```

### Manual Testing Checklist

#### ✅ Accessibility Tests
- [ ] **Skip Link**: Tab to skip link, press Enter, verify main content focus
- [ ] **Keyboard Navigation**: 
  - [ ] Tab through all interactive elements
  - [ ] Use arrow keys on feature cards (Right/Down = next, Left/Up = previous)
  - [ ] Press Home/End on cards (jump to first/last)
  - [ ] Press Enter/Space on buttons
  - [ ] Press Escape to close toasts
- [ ] **Screen Reader Tests**:
  - [ ] NVDA (Windows): All content announced properly
  - [ ] VoiceOver (macOS): Landmark navigation works
  - [ ] Live regions announce status changes
- [ ] **Focus Indicators**: All focusable elements have visible focus
- [ ] **Color Contrast**: Use WebAIM contrast checker on all text
- [ ] **Reduced Motion**: Set system preference and verify animations stop

#### ✅ Responsive Design Tests
- [ ] **Breakpoints**: Test at 360px, 420px, 768px, 1024px, 1280px, 1440px
- [ ] **Mobile Portrait**: iPhone SE (375×667)
- [ ] **Mobile Landscape**: iPhone SE (667×375) 
- [ ] **Tablet**: iPad (768×1024)
- [ ] **Desktop**: Standard (1280×720)
- [ ] **Large Desktop**: (1920×1080)

#### ✅ Interaction Tests
- [ ] **Buttons**: All CTAs work and provide feedback
- [ ] **Toasts**: Appear, are dismissible, auto-close appropriately
- [ ] **Cards**: Hover/focus effects work on all cards
- [ ] **Live Demo**: Temperature updates every 10 seconds
- [ ] **Animations**: Respect reduced motion preference

#### ✅ Content Tests
- [ ] **Headings**: Logical hierarchy (h1 → h2 → h3)
- [ ] **Alt Text**: All decorative images marked `aria-hidden="true"`
- [ ] **Labels**: All form controls and buttons have accessible names
- [ ] **Language**: `lang` attribute set on `<html>`

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Edge 90+

## 📊 Performance Metrics

### Target Performance Scores
- **Lighthouse Performance**: ≥ 90
- **Lighthouse Accessibility**: ≥ 95  
- **Lighthouse Best Practices**: ≥ 90
- **Lighthouse SEO**: ≥ 90

### Optimization Features
- Minified CSS and JavaScript
- Optimized SVG icons
- Efficient font loading
- Intersection Observer for animations
- CSS custom properties for theming

## 🎨 Design System Reference

### Colors
```css
--bg: #F5F7FB           /* Page background */
--surface: #FFFFFF      /* Card/component background */
--text: #0F172A         /* Primary text */
--muted: #64748B        /* Secondary text */
--primary-500: #3B82F6  /* Primary blue */
--primary-600: #2563EB  /* Primary blue dark */
--accent-500: #16A34A   /* Success green */
--danger-500: #EF4444   /* Error red */
--warning-500: #F59E0B  /* Warning orange */
```

### Typography Scale
```css
--font-size-h1: 2.5rem     /* 40px desktop, 32px mobile */
--font-size-h2: 1.75rem    /* 28px */
--font-size-body: 1rem     /* 16px base */
--font-size-small: 0.875rem /* 14px */
```

### Spacing Scale
```css
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
--space-12: 3rem    /* 48px */
--space-16: 4rem    /* 64px */
```

## 🛠️ Component Library

### Button Component
```html
<!-- Primary Button -->
<button class="btn btn-primary" type="button" aria-label="Descriptive label">
  <svg aria-hidden="true">...</svg>
  Button Text
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary" type="button">
  Button Text
</button>
```

### Card Component
```html
<article class="card" role="article" aria-labelledby="card-title" tabindex="0">
  <h3 id="card-title">Card Title</h3>
  <p>Card content...</p>
</article>
```

### Badge Component
```html
<span class="badge badge-success" aria-label="Status indicator">
  <svg aria-hidden="true">...</svg>
  Badge Text
</span>
```

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] **Accessibility Audit**: Run axe-core with 0 critical violations
- [ ] **Lighthouse Audit**: All scores ≥ target thresholds
- [ ] **Cross-Browser Testing**: Verify on all supported browsers
- [ ] **Mobile Testing**: Test on real devices (iOS/Android)
- [ ] **Performance Budget**: Check bundle size and load times
- [ ] **Content Review**: Verify all copy and links

### Build Process
```bash
# Create production build
npm run build

# Verify build contents
ls -la dist/

# Test production build locally
npm run preview
```

### Deployment Steps
1. **Build**: `npm run build`
2. **Upload**: Deploy `dist/` folder to web server
3. **DNS**: Point domain to hosting service
4. **SSL**: Ensure HTTPS is enabled
5. **CDN**: Configure if using content delivery network
6. **Analytics**: Add tracking if required (accessibility-compliant)

### Post-Deployment Verification
- [ ] **Live Site**: Verify all functionality on live URL
- [ ] **SSL Certificate**: Confirm HTTPS works properly
- [ ] **Mobile Performance**: Test on real devices over mobile networks
- [ ] **Accessibility**: Re-run automated tests on live site
- [ ] **Analytics**: Verify tracking works if implemented

## 📈 Monitoring & Maintenance

### Regular Checks
- **Monthly**: Run Lighthouse audits to monitor performance
- **Quarterly**: Review accessibility with latest tools
- **Annually**: Update dependencies and audit security

### Tools for Ongoing Monitoring
- [WebPageTest](https://webpagetest.org/) - Performance monitoring
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation

## 🤝 Contributing

### Code Standards
- Use semantic HTML5 elements
- Follow WCAG 2.1 AA guidelines
- Maintain 4.5:1 color contrast minimum
- Test with keyboard navigation
- Verify screen reader compatibility

### Accessibility Guidelines
1. **Always** include `aria-label` for icon-only buttons
2. **Always** use `aria-hidden="true"` for decorative elements
3. **Always** provide text alternatives for visual information
4. **Always** test with keyboard navigation
5. **Always** verify focus indicators are visible

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with accessibility in mind. Protecting families through inclusive design.**