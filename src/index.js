import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import {BrowserRouter} from 'react-router-dom'
import HouseContextProvider from './components/HouseContext';
import {DarkModeContextProvider} from './components/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeContextProvider>
    <HouseContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </HouseContextProvider>
  </DarkModeContextProvider>
);
