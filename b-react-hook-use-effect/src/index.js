import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppClass from './App-Class';
ReactDOM.render(
  <React.StrictMode>
    {/* <App />*/}
    <AppClass />
  </React.StrictMode>,
  document.getElementById('root')
);

