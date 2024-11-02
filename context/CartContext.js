import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [badgeCount, setBadgeCount] = useState(0);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        Alert.alert("Message", "This product is already in your cart.");
        return prevCart; // Return the previous cart if item exists
      } else {
        setBadgeCount(badgeCount + 1); // Increase badgeCount for new product
        return [...prevCart, { ...product, quantity: 1 }]; // Add new product to cart
      }
    });
  };

  // Modify removeFromCart to accept an index
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1); // Remove the item at the specified index

      // Giảm badgeCount khi một sản phẩm bị xóa khỏi giỏ hàng
      if (badgeCount > 0) {
        setBadgeCount(badgeCount - 1);
      }

      return updatedCart;
    });
  };

  const increaseQuantity = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1; // Increment quantity
      return updatedCart;
    });
  };

  const decreaseQuantity = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1; // Decrement quantity
      }
      return updatedCart;
    });
  };

  const updateQuantity = (index, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.index === index
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        category,
        setCategory,
        cart,
        setCart,
        setBadgeCount,
        badgeCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
