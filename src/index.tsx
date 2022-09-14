/* @refresh reload */
import { render } from 'solid-js/web';
import { HopeProvider } from '@hope-ui/solid';

import './utils/index.css';
import App from './App';
import { config } from './utils/theme';

render(
  () => (
    <HopeProvider config={config}>
      <App />
    </HopeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
