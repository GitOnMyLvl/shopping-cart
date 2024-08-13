import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart): [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if(existingProduct) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity} : item));
    }else{
      setCart([...cart, {...product, quantity}]);
    }
  };

  return(
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}