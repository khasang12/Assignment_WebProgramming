import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './components/GlobleStyles';
import { StoreProvider } from './stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <StoreProvider>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </StoreProvider>,
    //  </React.StrictMode>,
);
