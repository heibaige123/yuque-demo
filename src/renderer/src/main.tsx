import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import styleHref from '~renderer/assets/style/index.scss?url';

ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement).render(
    <React.StrictMode>
        <link
            rel='stylesheet'
            href={styleHref}
        />
        <App />
    </React.StrictMode>,
);
