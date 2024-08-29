import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from '@/app/app';

import './app/styles/index.css';

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container not found");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);