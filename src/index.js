import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


