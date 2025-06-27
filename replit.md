# Kenylson Lourenço - Portfolio Landing Page

## Overview

This is a modern, immersive portfolio landing page for Kenylson Lourenço, a web developer. The application features a futuristic cyberpunk design with black and neon green color scheme, advanced animations, and interactive elements. Built as a full-stack application with React frontend and Express backend, it's designed to showcase development services and handle contact form submissions.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern development
- **Component-based architecture** with modular, reusable UI components
- **Framer Motion** for advanced animations including parallax, scroll effects, and 3D rotations
- **Tailwind CSS** with custom cyberpunk theme using CSS variables
- **Radix UI** components for accessibility and consistent design patterns
- **React Hook Form** with Zod validation for form management
- **Tanstack React Query** for server state management

### Backend Architecture
- **Express.js** server with TypeScript
- **Modular route structure** with separate route handlers
- **Memory storage implementation** with interface-based storage abstraction
- **Drizzle ORM** configured for PostgreSQL (schema defined but using memory storage in development)
- **API-first design** with RESTful endpoints

### Build System
- **Vite** as the primary build tool with optimized production configuration
- **Multiple build targets**: development (Vite dev server) and production (static files)
- **Code splitting** with manual chunks for vendor libraries, animations, and UI components
- **TypeScript compilation** with path mapping for clean imports

## Key Components

### Frontend Components
1. **Navigation** - Fixed header with scroll progress indicator and mobile menu
2. **Hero Section** - Landing area with animated text reveals and parallax effects
3. **Services Section** - Interactive cards showcasing development services
4. **Portfolio Section** - Project showcase with hover effects and technology tags
5. **Skills Section** - Animated skill bars and technology stack display
6. **Contact Section** - Form with validation and submission handling
7. **UI Components** - Comprehensive component library based on Radix UI primitives

### Backend Components
1. **Route Handlers** - Contact form submission and data retrieval endpoints
2. **Storage Layer** - Abstracted storage interface with memory implementation
3. **Validation** - Shared Zod schemas for data validation
4. **Error Handling** - Centralized error handling middleware

### Animation System
- **Scroll-triggered animations** with Intersection Observer
- **Parallax effects** with different scroll speeds
- **Custom cursor** with magnetic attraction to interactive elements
- **Particle system** for ambient background effects
- **Text reveal animations** word-by-word on scroll

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Form data validated using Zod schemas
3. Data sent to Express API endpoint via React Query
4. Server validates and stores contact information
5. Success/error feedback displayed to user

### Animation Flow
1. Scroll events trigger animation calculations
2. Framer Motion transforms applied based on scroll progress
3. Custom hooks manage scroll state and progress
4. Components respond to scroll triggers for reveal animations

## External Dependencies

### Core Dependencies
- **React ecosystem**: React 18, React DOM, React Router (wouter)
- **Animation**: Framer Motion for advanced animations
- **UI Library**: Radix UI primitives with Tailwind CSS styling
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **State Management**: Tanstack React Query for server state
- **Database**: Drizzle ORM with Neon Database serverless driver

### Development Dependencies
- **Build Tools**: Vite, PostCSS, Autoprefixer
- **TypeScript**: Full TypeScript support with path mapping
- **Replit Integration**: Vite plugins for Replit development environment

## Deployment Strategy

### Production Build
- **Static site generation** with optimized asset bundling
- **Netlify Functions** for serverless API endpoints
- **Environment-specific configurations** for development and production
- **Manual chunking strategy** for optimal loading performance

### Development
- **Vite dev server** with HMR and error overlay
- **Memory storage** for development without database dependency
- **TypeScript compilation** with incremental builds
- **Path alias resolution** for clean import statements

### Database Strategy
- **Drizzle ORM** configured for PostgreSQL with migration support
- **Schema-first approach** with shared types between frontend and backend
- **Memory storage fallback** for development environment
- **Environment variable configuration** for database connection

## Changelog
- June 27, 2025. Initial setup
- June 27, 2025. Completed all deploy files and configurations for Netlify
- June 27, 2025. Added SEO optimization, PWA manifest, and security headers
- June 27, 2025. Created comprehensive build system with production optimization

## User Preferences

Preferred communication style: Simple, everyday language.