import React from 'react';
import { render } from 'react-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import App from './App';
import CryptoContext from './CryptoContext';

render(
  <CryptoContext>
    <App />
  </CryptoContext>,
  document.getElementById('root')
);
