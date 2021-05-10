import React from 'react';
import ReactDOM from 'react-dom';
import './styles/navbar.css';
import './styles/blogs.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
