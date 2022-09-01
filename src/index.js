import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/reducer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <provider store={store}>
    <App />
  </provider>
);

