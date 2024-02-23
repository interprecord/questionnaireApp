import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import classes from "/Users/kokoro/dev/portfolio/questionnaire-app/src/CssModules.module.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode >
    <div className={classes.background}>
    <App />
    </div>
  </React.StrictMode>
  </BrowserRouter>
);


