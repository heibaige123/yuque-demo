import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'uno.css';
import 'virtual:uno.css';
import 'virtual:unocss-devtools';
import './assets/style/index.css';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
