
// src/main.tsx

import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App' // Import routes from the new App.tsx
import './index.css'

// Initialize the app
export const createRoot = ViteReactSSG({ routes })
