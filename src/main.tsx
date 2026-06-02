import { StrictMode } from 'react';

import * as client from 'react-dom/client';

import './index.css';

client.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className="text-red-800">Paragrahs</p>
  </StrictMode>,
);
