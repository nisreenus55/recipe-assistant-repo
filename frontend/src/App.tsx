import React from "react";
import ProductList from "./components/ProductList";
import RecipeAssistant from "./components/RecipeAssistant";

function App() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Organic Marketplace</h1>
      <ProductList />
      <hr className="my-4" />
      <RecipeAssistant />
    </div>
  );
}

export default App;
