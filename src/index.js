import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Route, Switch} from "react-router-dom";

import axios from 'axios';

// get the logged in user from the backend and pass it to App.js as 
// a prop

ReactDOM.render(   <BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();