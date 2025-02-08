import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (index, amount) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index] = { ...newCart[index], quantity: Math.max(1, newCart[index].quantity + amount) };
      return newCart;
    });
  };

  const removeItem = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleBuyNow = () => {
    const orderDetails = cart.map(item => `${item.name} x${item.quantity}`).join("%0A");
    const whatsappURL = `https://wa.me/919999999999?text=Order%20Details:%0A${orderDetails}%0ATotal:%20$${getTotalPrice()}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <p>{item.name}</p>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(index, -1)} className="px-2">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => updateQuantity(index, 1)} className="px-2">+</button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${getTotalPrice()}</h3>
          <button onClick={handleBuyNow} className="bg-green-500 text-white px-4 py-2 mt-4">Buy Now on WhatsApp</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
