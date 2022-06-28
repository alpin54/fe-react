import React from 'react';
import ReactDOM from 'react-dom/client';

// app
import App from './container/app';
import reportWebVitals from './reportWebVitals';

// styles
import './assets/styles/app.scss';

ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);