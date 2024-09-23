# Microfrontend Application

This project is a microfrontend application built with Vite and React. It uses pnpm as the package manager and implements a main container with host and remote modules for basket, navbar, and product detail.

## Project Structure

- `main-container/`: The main application shell
- `basket/`: Remote module for the basket functionality
- `navbar/`: Remote module for the navigation bar
- `product-detail/`: Remote module for product details

## Prerequisites

- Node.js (version X.X.X or higher)
- pnpm (version X.X.X or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/srhtak/vite-micro-frontend.git
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

## Running the Application

1. Start the development server:
   ```
   pnpm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the port specified in your configuration).

## Building for Production

To create a production build:

```
pnpm run build
```

The built files will be in the `dist/` directory.

## Configuration

Details about any configuration files and how to modify them...

## Contributing

Instructions for how to contribute to the project...

## License

Specify your license here.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)
