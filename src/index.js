import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <App />
    </BrowserRouter>,
  
);

reportWebVitals();


// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
