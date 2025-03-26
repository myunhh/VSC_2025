import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, Route, BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MenusProvider } from './common/main/mainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      {/* <MenusProvider> */}
        <App />
      {/* </MenusProvider> */}
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
