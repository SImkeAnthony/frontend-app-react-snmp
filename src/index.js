import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/LayoutStyle.scss';
import './style/DeviceInfoStyle.css'
import './style/NetworkStyle.css'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./store/redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
