import React, { useState } from 'react';
import './AdminPage.css';
import { useSupabaseClient } from './SupabaseContext'; // Import useSupabaseClient

function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newProductSku, setNewProductSku] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductQuantity, setNewProductQuantity] = useState('');
  const [newProductAvailableFrom, setNewProductAvailableFrom] = useState('');
  const [newProductAvailableTo, setNewProductAvailableTo] = useState('');
  const [newProductDeliveryDate, setNewProductDeliveryDate] = useState('');
  const [noticeMessage, setNoticeMessage] = useState('');
  const supabase = useSupabaseClient(); // Use Supabase client from context

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAddProduct = async () => {
    const newProduct = {
      sku: newProductSku,
      name: newProductName,
      price: parseFloat(newProductPrice),
      image: newProductImage,
      quantity: parseInt(newProductQuantity, 10),
      available_from: newProductAvailableFrom,
      available_to: newProductAvailableTo,
      delivery_date: newProductDeliveryDate,
    };

    try {
      const { data, error } = await supabase
        .from('products')
        .insert([newProduct]);

      if (error) {
        console.error("Error adding product:", error);
        alert('Failed to add product.');
      } else {
        alert('Product added successfully!');
        setNewProductName('');
        setNewProductSku('');
        setNewProductPrice('');
        setNewProductImage('');
        setNewProductQuantity('');
        setNewProductAvailableFrom('');
        setNewProductAvailableTo('');
        setNewProductDeliveryDate('');
      }
    } catch (error) {
      console.error("Unexpected error adding product:", error);
      alert('Failed to add product due to an unexpected error.');
    }
  };

  const handleSaveNotice = () => {
    // Notice message saving to Supabase will be implemented later if needed.
    alert('Notice message saving is not yet implemented in this Supabase version.');
  };


  if (!loggedIn) {
    return (
      <div className="admin-page">
        <h2 className="admin-page-title">Admin Login</h2>
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="admin-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-input"
          />
          <button onClick={handleLogin} className="admin-button">Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <h2 className="admin-page-title">Admin Page</h2>
      <h3 className="admin-section-title">Add New Product</h3>
      <div className="add-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          className="admin-input"
        />
        <input
          type="text"
          placeholder="SKU"
          value={newProductSku}
          onChange={(e) => setNewProductSku(e.target.value)}
          className="admin-input"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
          className="admin-input"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProductImage}
          onChange={(e) => setNewProductImage(e.target.value)}
          className="admin-input"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newProductQuantity}
          onChange={(e) => setNewProductQuantity(e.target.value)}
          className="admin-input"
        />
        <input
          type="date"
          placeholder="Available From Date"
          value={newProductAvailableFrom}
          onChange={(e) => setNewProductAvailableFrom(e.target.value)}
          className="admin-input"
        />
        <input
          type="date"
          placeholder="Available To Date"
          value={newProductAvailableTo}
          onChange={(e) => setNewProductAvailableTo(e.target.value)}
          className="admin-input"
        />
        <input
          type="date"
          placeholder="Delivery Date"
          value={newProductDeliveryDate}
          onChange={(e) => setNewProductDeliveryDate(e.target.value)}
          className="admin-input"
        />
        <button onClick={handleAddProduct} className="admin-button">Add Product</button>
      </div>

      <h3 className="admin-section-title">General Notice Message</h3>
      <div className="notice-form">
        <textarea
          placeholder="Enter notice message"
          value={noticeMessage}
          onChange={(e) => setNoticeMessage(e.target.value)}
          className="admin-textarea"
        />
        <button onClick={handleSaveNotice} className="admin-button">Save Notice</button>
      </div>
    </div>
  );
}

export default AdminPage;
