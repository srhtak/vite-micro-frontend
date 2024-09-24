# Microfrontend E-commerce Application

This project demonstrates a microfrontend architecture for an e-commerce application using React, TypeScript, and Vite. It showcases how different parts of an application can be developed and deployed independently while working together seamlessly.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Communication Between Microfrontends](#communication-between-microfrontends)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This sample e-commerce application is built using a microfrontend architecture. It consists of a host application and several remote applications (Product Detail, Navbar, and Recommendation), each developed and deployed independently.

## Features

- Host application that integrates all microfrontends
- Product Detail microfrontend with variant selection
- Navbar microfrontend for navigation
- Recommendation microfrontend that updates based on product variants
- Inter-microfrontend communication using browser events

## Architecture

The application follows a microfrontend architecture:

- Host App: The main application shell that integrates all other microfrontends
- Product Detail: Displays product information and allows variant selection
- Navbar: Provides navigation functionality
- Recommendation: Shows product recommendations based on selected variants

## Technologies Used

- React
- TypeScript
- Vite
- Module Federation (for microfrontend integration)
- Browser Events API (for inter-microfrontend communication)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/srhtak/vite-micro-frontend
   ```

2. Install dependencies for all microfrontends:
   ```
   pnpm install
   ```

### Running the Application

1. Start all remote applications:
   Product Detail - Navbar - Recommendation
   ```
   pnpm preview
   ```
1. Start all host application:
   ```
   pnpm dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
microfrontend-ecommerce/
│
├── host/
│   ├── src/
│   │   ├── App.tsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── product-detail/
│   ├── src/
│   │   ├── ProductDetail.tsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── navbar/
│   ├── src/
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── recommendation/
│   ├── src/
│   │   ├── Recommendation.tsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
└── package.json
```

## Communication Between Microfrontends

This project uses the Browser Events API for communication between microfrontends. The Product Detail microfrontend dispatches a custom event when a variant changes, which the Recommendation microfrontend listens for and responds to.

Example:

```typescript
// In ProductDetail.tsx
const changeVariant = (newVariant: 'small' | 'medium' | 'large') => {
  setProduct(prev => ({ ...prev, variant: newVariant }));
  const event = new CustomEvent('variantChanged', { detail: newVariant });
  window.dispatchEvent(event);
};

// In Recommendation.tsx
useEffect(() => {
  const handleVariantChange = (event: Event) => {
    const variant = (event as CustomEvent).detail;
    // Update recommendations based on variant
  };
  window.addEventListener('variantChanged', handleVariantChange);
  return () => {
    window.removeEventListener('variantChanged', handleVariantChange);
  };
}, []);
```

## Deployment

Each microfrontend can be deployed independently. The host application should be configured to load the remote microfrontends from their respective URLs.

1. Build each microfrontend:
   ```
   cd [microfrontend-directory]
   pnpm run build
   ```

2. Deploy the built assets to your preferred hosting service.

3. Update the host application's configuration to point to the deployed microfrontend URLs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
