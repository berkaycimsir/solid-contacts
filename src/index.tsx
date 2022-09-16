/* @refresh reload */
import { render } from 'solid-js/web';
import { HopeProvider } from '@hope-ui/solid';

import './utils/index.css';
import App from './App';
import { Router } from '@solidjs/router';
import { config } from './utils/theme';

render(
  () => (
    <HopeProvider config={config}>
      <Router>
        <App />
      </Router>
    </HopeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
