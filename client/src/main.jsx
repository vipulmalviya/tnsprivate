import React from 'react';
import App from './App';
import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');



createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);