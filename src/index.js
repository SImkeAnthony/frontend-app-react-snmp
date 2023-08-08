import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/LayoutStyle.scss';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./store/redux/Store.js";

if(window.Cypress){
    window.store = store;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
