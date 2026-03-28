# Setareh Kerman Wire & Cable Factory

A modern, responsive React application for Setareh Kerman Wire & Cable Factory, featuring bilingual support (Persian/English), advanced animations, and comprehensive accessibility features.

## 🚀 Features

### Core Features
- **Bilingual Support**: Full Persian (RTL) and English (LTR) language support
- **Responsive Design**: Optimized for mobile, tablet, desktop, and large screens
- **Modern UI**: Beautiful animations and glassmorphism effects
- **SEO Optimized**: Enhanced meta tags, semantic HTML, and accessibility features
- **Performance**: Optimized loading with lazy loading and efficient animations

### Technical Stack
- **React 18+** with functional components and hooks
- **Vite** for fast development and building
- **TailwindCSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for navigation
- **React Helmet Async** for SEO management

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── home/           # Home page specific components
│   ├── about/          # About page components
│   ├── contact/        # Contact page components
│   └── products/      # Products page components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── styles/             # Modular CSS files
├── utils/              # Utility functions and constants
└── Constants/          # Application constants
```

## 🛠 Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Design System

### Colors
- Primary: `#374151` (Dark Gray)
- Secondary: `#D4AF37` (Gold)
- Background: `#F8F9FA` (Light Gray)
- White: `#FFFFFF`

### Typography
- English: Inter font family
- Persian: Vazirmatn font family

### Components
- **Glass Panel**: Semi-transparent panels with backdrop blur
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Rounded corners with subtle shadows
- **Navigation**: Responsive header with mobile menu

## ♿ Accessibility

### Features Implemented
- **Semantic HTML5**: Proper use of header, nav, main, section, and footer tags
- **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard accessibility with focus indicators
- **Alt Text**: All images have descriptive alt text
- **Language Support**: Proper lang attributes and RTL/LTR support
- **Focus Management**: Visible focus states and logical tab order

### WCAG 2.1 Compliance
- Level A: Fully compliant
- Level AA: Majority compliant
- Level AAA: Partial compliance

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🔧 Optimization

### Performance
- **Code Splitting**: Automatic with React Router
- **Lazy Loading**: Images and components loaded on demand
- **Tree Shaking**: Unused code eliminated in build
- **Minification**: CSS and JavaScript minified

### SEO
- **Meta Tags**: Comprehensive meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Prevent duplicate content issues
- **Structured Data**: JSON-LD for search engines

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/chat
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary and confidential to Setareh Kerman Wire & Cable Factory.

## 📞 Contact

- **Website**: https://setarehkerman.com
- **Email**: info@setarehkerman.com
- **Phone**: +98 34 1234 5678

---

© 2026 Setareh Kerman Wire & Cable Factory. All rights reserved.
