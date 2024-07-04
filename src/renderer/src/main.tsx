import { render } from 'solid-js/web';
// import 'uno.css';
import 'virtual:uno.css';
import 'virtual:unocss-devtools';
import App from './App';

render(
  () => <App />,
  document.getElementById('root') as HTMLElement,
);
