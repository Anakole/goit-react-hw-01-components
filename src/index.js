import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function toCamelCase(str) {
//   const splitSrt = str.replace(/[^A-Z0-9]/gi, '_').split('_');
//   console.log(splitSrt);
// }

// toCamelCase('the-stealth-warrior');
