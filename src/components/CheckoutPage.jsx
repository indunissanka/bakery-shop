import React, { useState } from 'react';
import './CheckoutPage.css';

function CheckoutPage() {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleCheckout = () => {
    alert('Checkout initiated!\n\nName: ' + customerName + '\nAddress: ' + customerAddress + '\nPayment Method: Cash on Delivery');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="checkout-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Delivery Address:</label>
          <textarea
            id="address"
            placeholder="Your Delivery Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            className="checkout-input"
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              Cash on Delivery (COD)
            </label>
          </div>
        </div>
        <button onClick={handleCheckout} className="checkout-button">Place Order</button>
      </div>
    </div>
  );
}

export default CheckoutPage;
