import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MemeGenerator from './MemeGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MemeGenerator />
  </React.StrictMode>,
);
