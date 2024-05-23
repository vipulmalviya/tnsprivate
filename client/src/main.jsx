import React from 'react';
import App from './App';
import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </React.StrictMode>
);