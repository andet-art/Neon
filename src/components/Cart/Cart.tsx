import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  // Example static cart items — replace with real data or state later
  const cartItems: CartItem[] = [
    { id: 1, name: "Product A", price: 29.99, quantity: 2 },
    { id: 2, name: "Product B", price: 15.5, quantity: 1 },
    { id: 3, name: "Product C", price: 42.0, quantity: 3 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Product</th>
              <th className="border-b py-2">Price</th>
              <th className="border-b py-2">Quantity</th>
              <th className="border-b py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ id, name, price, quantity }) => (
              <tr key={id} className="hover:bg-purple-50">
                <td className="py-3">{name}</td>
                <td className="py-3">${price.toFixed(2)}</td>
                <td className="py-3">{quantity}</td>
                <td className="py-3">${(price * quantity).toFixed(2)}</td>
              </tr>
            ))}
            <tr className="font-bold border-t">
              <td colSpan={3} className="py-3 text-right">Total:</td>
              <td className="py-3">${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
