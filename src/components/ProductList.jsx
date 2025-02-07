import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import NoticeSection from './NoticeSection';
import { useSupabaseClient } from './SupabaseContext'; // Import useSupabaseClient

function ProductList() {
  const [productsData, setProductsData] = useState([]);
  const supabase = useSupabaseClient(); // Use Supabase client from context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          console.error("Error fetching products:", error);
        } else {
          setProductsData(data);
        }
      } catch (error) {
        console.error("Unexpected error fetching products:", error);
      }
    };

    fetchProducts();
  }, [supabase]);

  return (
    <div className="product-list-container">
      <NoticeSection message="" /> {/* Notice message can be fetched from Supabase later */}
      <div className="product-list">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
