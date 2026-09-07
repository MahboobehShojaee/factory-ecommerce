# Setareh Kerman Factory Website

Production-focused bilingual (Persian + English) React/Vite frontend for Setareh Kerman Wire & Cable, with RTL support, luxury dark-gold design language, SEO-first routing, and a backend-ready data architecture.

## 🚀 Features & Improvements

### Performance & Image Optimization
- **High-Performance Image Component** (`src/shared/ui/Image.jsx`)
  - Lazy loading with Intersection Observer
  - WebP support with automatic fallbacks
  - Proper srcset and sizes for responsive images
  - Blur-up loading effect and error handling
  - Accessibility support and SEO optimization

### Cart System & State Management
- **Complete Shopping Cart** using Zustand
  - Add/remove/update quantity functionality
  - localStorage persistence
  - Cart icon with real-time item count
  - Beautiful Cart Drawer with Framer Motion animations
  - Dedicated Cart page (`/cart`)
  - Bilingual support (fa/en) and RTL compatibility
  - Structure prepared for Wishlist and Comparison features

### Form Handling & Validation
- **Modern Form System** with react-hook-form + Zod
  - Strong type-safe validation schemas
  - Bilingual error messages (Persian + English)
  - Real-time validation with modern UX
  - Reusable form components:
    - `FormInput`, `FormTextarea`, `FormSelect`, `ErrorMessage`
  - Loading, success, and error states
  - Refactored ContactForm with comprehensive validation

### Mobile Experience & Responsiveness
- **Enhanced Mobile UX** across the entire website
  - Improved typography scale and spacing on mobile
  - Larger touch targets and better button sizes
  - Mobile-optimized navigation and cart drawer
  - Responsive product grid layout
  - Better hero sections and footer layout
  - Fixed layout shifts and overflow issues
  - Maintained luxury dark + gold aesthetic

### Performance Optimizations
- **React Performance** improvements
  - React.memo, useMemo, and useCallback optimizations
  - Optimized ProductGrid and list components
  - Intelligent route prefetching for important pages
  - Improved Vite config with granular chunk splitting

### Animation & Accessibility
- **Motion Optimization** with reduced motion support
  - Respects `prefers-reduced-motion` settings
  - Optimized Framer Motion animations
  - Motion configuration utilities for consistent animations
  - Enhanced accessibility (a11y) standards

### Bundle Optimization
- **Improved Bundle Splitting**
  - Separate chunks for PDF functionality
  - Better manualChunks configuration in Vite
  - Optimized import strategies for heavy dependencies

## Tech Stack

- **Core**: React 18 + Vite 5
- **Styling**: Tailwind CSS + Framer Motion
- **Routing**: React Router + React Helmet Async
- **Data**: TanStack Query + Axios
- **State**: Zustand (Cart System)
- **Forms**: react-hook-form + Zod + @hookform/resolvers
- **Performance**: React.memo, useMemo, useCallback optimizations
- **Images**: Custom high-performance Image component
- **Animations**: Framer Motion with reduced motion support

## Quick Start

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and set values:

```env
VITE_API_BASE_URL=http://localhost:5000
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

## Architecture

```
src/
  app/
    AppShell.jsx
    providers/AppProviders.jsx
    router/AppRouter.jsx
  features/
    cart/
      store/cartStore.js
      components/CartDrawer.jsx
      components/CartIcon.jsx
      components/CartItem.jsx
      components/EmptyCart.jsx
  shared/
    api/
      client.js
      hooks/useProductsQuery.js
      services/productsService.js
    forms/
      FormInput.jsx
      FormTextarea.jsx
      FormSelect.jsx
      ErrorMessage.jsx
      validationSchemas.js
    seo/
      SeoHead.jsx
      schema.js
    ui/
      AsyncState.jsx
      ErrorBoundary.jsx
      Image.jsx
    utils/
      motionConfig.js
  pages/
    Cart.jsx
    Products.jsx
    Contact.jsx
    CategorySpecs.jsx
    About.jsx
    Home.jsx
    ProjectDetails.jsx
    NotFound.jsx
  components/
    Layout.jsx
    contact/ContactForm.jsx
    products/ProductCard.jsx
    ...
  context/
    LanguageContext.jsx
```

## Standards Implemented

- ✅ Route-level lazy loading and suspense fallbacks
- ✅ Global error boundary
- ✅ Shared loading/error/empty states
- ✅ Unified SEO component (`SeoHead`) with OpenGraph/Twitter/JSON-LD support
- ✅ Improved modal and form accessibility (`role=dialog`, `aria-modal`, labels, keyboard support)
- ✅ Bilingual + RTL behavior preserved via `LanguageContext`
- ✅ High-performance image loading with WebP support
- ✅ Modern form validation with react-hook-form + Zod
- ✅ Mobile-first responsive design
- ✅ Accessibility (a11y) standards compliance
- ✅ Performance optimizations (React.memo, useMemo, useCallback)
- ✅ Reduced motion support
- ✅ Bundle optimization with code splitting

## Key Components

### Image Component (`src/shared/ui/Image.jsx`)
- Lazy loading with Intersection Observer
- WebP support with fallbacks
- Blur-up loading effect
- Error handling and placeholders
- SEO-optimized with proper alt text

### Cart System (`src/features/cart/`)
- Zustand store with localStorage persistence
- Beautiful cart drawer with animations
- Real-time cart icon with item count
- Full cart page with checkout flow
- Bilingual support

### Form System (`src/shared/forms/`)
- Type-safe validation with Zod
- Bilingual error messages
- Reusable form components
- Real-time validation feedback

### Motion Config (`src/shared/utils/motionConfig.js`)
- Reduced motion support
- Consistent animation presets
- Performance-optimized animations

## Performance Features

- **Bundle Splitting**: Optimized Vite config with granular chunks
- **Image Optimization**: WebP support, lazy loading, responsive images
- **React Performance**: Memoization strategies for components
- **Animation Performance**: Reduced motion support, optimized Framer Motion
- **Route Prefetching**: Intelligent prefetching for important pages

## Mobile Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Touch Targets**: Larger touch targets for better mobile UX
- **Typography**: Optimized font scales for mobile readability
- **Navigation**: Mobile-optimized navigation and cart drawer
- **Grid Layout**: Responsive product grid that adapts to screen size

## Notes

- The duplicate legacy app folder `factory-ecommerce/` has been removed from active code.
- Product/category data is consumed via the service + query layer to ease future REST/GraphQL backend migration.
- All components are optimized for performance and accessibility.
- The codebase follows React best practices with proper error boundaries and loading states.
- Mobile experience has been significantly improved with better touch targets and responsive design.

## Production deployment (Liara)

This project is configured for **Liara** (Iranian hosting):

- **Static app** → website (`setarehkerman.com`)
- **Node app** → API (`api.setarehkerman.com`)

Full step-by-step guide: **[LIARA-DEPLOYMENT.md](./LIARA-DEPLOYMENT.md)**

Quick commands (replace app names with yours):

```bash
npm run build:production
cd dist && liara deploy --app=YOUR-WEB-APP --platform=static

cd server && liara deploy --app=YOUR-API-APP --platform=node --port=5000
```
