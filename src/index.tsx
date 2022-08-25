import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoadScript } from '@react-google-maps/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadScript
      libraries={['places']}
      googleMapsApiKey={process.env.REACT_APP_API_KEY!}
    >
      <App />
    </LoadScript>
  </React.StrictMode>
);
