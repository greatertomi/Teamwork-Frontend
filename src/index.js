import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AdminLogin from './components/AdminLogin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AdminLogin />, document.getElementById('root'));

serviceWorker.unregister();
