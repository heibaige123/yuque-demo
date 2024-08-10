import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'uno.css';
import 'virtual:uno.css';
import 'virtual:unocss-devtools';
import './assets/style/index.css';
import App from './App';
import '@huo-note/shadcn-ui/dist/style.css';

ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
