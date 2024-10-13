import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getProducts } from "../products/read"; 
import { ProductsTemplate } from "../components/templates";
import { Loader } from "../components";

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
      return <Loader />; 
  }

  return (
    <div>
      <Helmet>
        <title>AnyCart - Your One-Stop Online Shop</title>
        <meta name="description" content="Discover a wide selection of products at AnyCart. Shop the latest trends in fashion, electronics, home goods, and more. Enjoy fast shipping and exceptional customer service. Start shopping today!" />
      </Helmet>
      <main>
        <ProductsTemplate items={items} /> 
      </main>
    </div>
  );
}

export default App;