import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://your-sentry-dsn@sentry.io/project-id',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  // We recommend adjusting this value in production,
  // or using tracesSampler for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);