import React, { useState } from "react";
import { getRecipe } from "../api/api";

const RecipeAssistant: React.FC = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleSubmit = async () => {
    const ingList = ingredients.split(",").map((i) => i.trim());
    const res = await getRecipe(ingList);
    setRecipe(res);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">AI Recipe Assistant</h2>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients separated by commas"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Get Recipe
      </button>
      {recipe && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <strong>Recipe:</strong> {recipe}
        </div>
      )}
    </div>
  );
};

export default RecipeAssistant;
