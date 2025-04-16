import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Перевір, чи вказано правильне ім'я шляху
import './index.css'; // Якщо є стилі

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
