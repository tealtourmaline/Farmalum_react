import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartApp } from './CartApp';
import { UsersApp } from './UsersApp';
import { LogInApp } from './LoginApp';


const App = () => (
  <Router>
    <Routes>
      <Route path="/cart" element={<CartApp/>} />
      <Route path="/registro" element={<UsersApp/>} />
      <Route path="/login" element={<LogInApp/>} />
      <Route path="/" element={<CartApp/>} />
      <Route exact element={<CartApp/>}  />
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
