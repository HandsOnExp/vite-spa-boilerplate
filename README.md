# Vite SPA Boilerplate

A modern single page application boilerplate built with Vite for fast development and optimized production builds.

## Features

- ⚡ **Vite** - Fast build tool and development server
- 🎯 **Single Page Application** - Modern SPA architecture
- 🔥 **Hot Module Replacement** - Instant feedback during development
- 📦 **Optimized Build** - Tree-shaking and code splitting out of the box
- 🛠️ **TypeScript Ready** - Full TypeScript support
- 💨 **ESNext** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HandsOnExp/vite-spa-boilerplate.git
cd vite-spa-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   ├── main.js        # Application entry point
│   └── index.html     # HTML template
├── public/            # Static assets
└── package.json       # Project configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details