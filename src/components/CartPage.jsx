import React from 'react';
import Cart from './Cart';
import './CartPage.css';
import NoticeSection from './NoticeSection';

function CartPage() {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <NoticeSection message="" /> {/* Notice message can be fetched from Supabase later */}
      <Cart />
    </div>
  );
}

export default CartPage;
