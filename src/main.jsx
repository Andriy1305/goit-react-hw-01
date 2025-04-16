// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ваш головний компонент
import './index.css'; // Якщо використовуєте CSS для стилів

// Створюємо корінь для React додатку і рендеримо компонент App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
