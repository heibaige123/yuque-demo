import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
