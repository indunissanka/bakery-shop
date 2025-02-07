import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import AdminPage from './components/AdminPage';
import CheckoutPage from './components/CheckoutPage';
import UserLoginPage from './components/UserLoginPage';
import { SupabaseProvider, useSupabaseClient } from './components/SupabaseContext'; // Import SupabaseProvider
import './App.css';

function App() {
  return (
    <SupabaseProvider> {/* Wrap your app with SupabaseProvider */}
      <div className="app">
        <header className="app-header">
          <h1 className="header-title">Sweet Delights Bakery</h1>
          <nav className="header-nav">
            <Link to="/" className="nav-link" aria-label="Shop">
              <span role="img" aria-label="Shop">🏠</span>
            </Link>
            <Link to="/cart" className="nav-link" aria-label="Cart">
              <span role="img" aria-label="Cart">🛒</span>
            </Link>
            <Link to="/checkout" className="nav-link" aria-label="Checkout">
              <span role="img" aria-label="Checkout">💳</span>
            </Link>
            <Link to="/login" className="nav-link" aria-label="Login">
              <span role="img" aria-label="Login">👤</span>
            </Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<UserLoginPage />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2024 Sweet Delights Bakery</p>
        </footer>
      </div>
    </SupabaseProvider>
  );
}

export default App;
