import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './Components/App';
// import jApp from './Components/App';
// import mApp from './Components/App';
// import oApp from './Components/App';

// Fetch element with root id
const root = document.querySelector('#root');

// Create React root
const reactRoot = ReactDOMClient.createRoot(root);

// Render root element into reactRoot
reactRoot.render(<App />);
