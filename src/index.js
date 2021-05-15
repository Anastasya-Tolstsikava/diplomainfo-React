import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
   // <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
   // </BrowserRouter>,
    document.getElementById('root'),
);
