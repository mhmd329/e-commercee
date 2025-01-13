import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevItems.filter((item) => item.id !== product.id);
        }
      }
      return prevItems;
    });
  };

  const clearFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cachedData = localStorage.getItem("products");
    if (cachedData) {
      setProducts(JSON.parse(cachedData));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, []);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Context.Provider
      value={{
        products,
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        clearFromCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};
