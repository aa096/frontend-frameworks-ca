import React, { useEffect, useState } from "react";
import { getProducts } from "../products/read"; 
import { ProductsTemplate } from "../components/templates";

function App() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        
        setItems(fetchedProducts); 
      } catch (error) {
        console.error("Error fetching products in App:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  


  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <main>
        <ProductsTemplate items={items} /> 
      </main>
    </div>
  );
}

export default App;