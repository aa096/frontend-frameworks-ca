import React, { useEffect, useState } from "react";
import { getProducts } from "../products/read"; // Ensure this function is properly defined
import { ProductsTemplate } from "../components/templates";

// Main App component
function App() {
  const [items, setItems] = useState([]); // Initialize state to hold API response
  const [loading, setLoading] = useState(true); // Loading state for fetch status

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        console.log("Fetched Products in App:", fetchedProducts); // Log products fetched
        setItems(fetchedProducts); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching products in App:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  

  // Conditional rendering based on loading state
  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  return (
    <div>
      <main>
        <ProductsTemplate items={items} /> {/* Pass the fetched items to the template */}
      </main>
    </div>
  );
}

export default App;