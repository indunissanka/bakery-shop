import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import NoticeSection from './NoticeSection';
import { useSupabaseClient } from './SupabaseContext';

function ProductList() {
  const [productsData, setProductsData] = React.useState([]);
  const supabase = useSupabaseClient();

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          console.error("Error fetching products:", error);
        } else {
          setProductsData(data || []);
        }
      } catch (error) {
        console.error("Unexpected error fetching products:", error);
      }
    };

    if (supabase) {
      fetchProducts();
    }
  }, [supabase]);

  return (
    <div className="product-list-container">
      <NoticeSection message="" />
      <div className="product-list">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
