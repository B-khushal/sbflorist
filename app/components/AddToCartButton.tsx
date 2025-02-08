"use client"

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product } from "../data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = storedCart.find((item: Product) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      storedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center px-4 py-2 rounded-md text-white ${
        isAdded ? "bg-green-500" : "bg-pink-600 hover:bg-pink-700"
      } transition-colors duration-300`}
    >
      {isAdded ? (
        "Added to Cart!"
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </>
      )}
    </button>
  );
}
