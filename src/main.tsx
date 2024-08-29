import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BuildComponentsTree } from '@/shared/lib/components/build-components-tree';
import { App } from '@/app/app';

import './app/styles/index.css';

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container not found");
}

const componentsTree = [StrictMode, BrowserRouter, App];

const root = createRoot(container);

root.render(BuildComponentsTree(componentsTree));