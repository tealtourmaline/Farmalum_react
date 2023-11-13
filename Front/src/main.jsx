import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartApp } from './CartApp';
import { UsersApp } from './UsersApp';
import { LogInApp } from './LoginApp';
import { CatalogApp } from './CatalogApp';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProfileApp } from './ProfileApp';
import { AdminProfileApp } from './AdminProfileApp';
import { UserProvider } from './contexts/UserContext';


const App = () => (
  <Router>
    <Routes>
      <Route path="/carrito" element={<CartApp/>} />
      <Route path="/registro" element={<UsersApp/>} />
      <Route path="/login" element={<LogInApp/>} />
      <Route path="/" element={<CatalogApp/>} />
      <Route path="/all" element={<CatalogApp/>} />
      <Route path="/profile" element={<ProfileApp/>} />
      <Route path="/profile/admin" element={<AdminProfileApp/>} />
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>
    </UserProvider>
  </React.StrictMode>
)