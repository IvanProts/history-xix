import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import MainPage from './view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MainPage />
  </React.StrictMode>
);