# TechRedy SPA - Next.js Frontend

A modern, responsive Single Page Application built with the latest versions of Next.js, React, and TypeScript.

## 🚀 Features

- **Latest Tech Stack**: Built with Next.js 15.x, React 19.x, and TypeScript 5.x
- **Modern UI**: Beautiful design with Tailwind CSS and Framer Motion animations
- **Responsive Design**: Fully responsive across all devices
- **Component-Based**: Modular components using Radix UI and custom components
- **Performance Optimized**: Static export ready for deployment
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion 12.0.0
- **GSAP**: 3.12.5 for advanced animations

## 📁 Project Structure

```
techready-spa/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Hero.tsx             # Hero section with animations
│   ├── AboutUs.tsx          # About us section
│   ├── WhyChooseTechRedy.tsx # Features and benefits
│   ├── CallToAction.tsx     # CTA section
│   └── Footer.tsx           # Footer with links and contact
├── lib/
│   └── utils.ts             # Utility functions
└── ...config files
```

## 🎨 Sections

### 1. Hero Section

- Animated typing effect for the brand name
- Floating particles background
- Statistics counter animation
- Gradient backgrounds and modern design

### 2. About Us Section

- Company story and mission
- Core values with icons
- Vision statement
- Statistics showcase

### 3. Why Choose TechRedy

- Feature grid with benefits
- Interactive cards with hover effects
- Success stories and metrics
- Call-to-action integration

### 4. Call to Action

- Compelling messaging
- Multiple action buttons
- Quick stats
- Community testimonial

### 5. Footer

- Company information
- Quick links and resources
- Contact information
- Newsletter subscription
- Social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or navigate to the project directory:

   ```bash
   cd techready-spa
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Build for Production

The project is configured for static export, making it suitable for deployment on any static hosting platform:

```bash
npm run build
```

This will generate a `dist` folder with all static files ready for deployment.

## 🎯 Key Features Implemented

### Latest Libraries (2025)

- ✅ Next.js 15.4.4 (latest stable)
- ✅ React 19.0.0 (latest)
- ✅ TypeScript 5.7.2 (latest)
- ✅ Tailwind CSS 3.4.17 (latest)
- ✅ Framer Motion 12.0.0 (latest)

### SPA Configuration

- ✅ Static export configuration
- ✅ Client-side routing
- ✅ Optimized for single-page applications

### Modern Design

- ✅ Gradient backgrounds
- ✅ Glass morphism effects
- ✅ Smooth animations
- ✅ Interactive hover states
- ✅ Responsive design

### Performance

- ✅ Image optimization
- ✅ Component lazy loading
- ✅ Bundle optimization
- ✅ Static generation

## 🎨 Customization

### Colors

The project uses a blue-purple gradient theme. Colors can be customized in:

- `tailwind.config.ts` - Global color scheme
- `app/globals.css` - Custom CSS variables

### Components

All components are modular and can be easily customized:

- Modify props and styling
- Add new sections
- Customize animations

### Content

Update content by editing the respective component files:

- Hero content in `Hero.tsx`
- About information in `AboutUs.tsx`
- Features in `WhyChooseTechRedy.tsx`

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🌟 Highlights

- **Modern Stack**: Uses the absolute latest versions of all major dependencies
- **Performance**: Optimized for fast loading and smooth animations
- **Accessibility**: Built with ARIA standards and keyboard navigation
- **SEO**: Proper meta tags and semantic HTML structure
- **Deployment Ready**: Static export configuration for easy hosting

---

Built with ❤️ by the TechRedy Team
