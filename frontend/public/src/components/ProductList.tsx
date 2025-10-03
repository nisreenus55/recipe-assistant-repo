import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Available Products</h2>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
