import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cursos, setCursos] = useState([
    {
      name: 'Saving Private Ryan',
      price: '$10',
      id: 1234,
    },
    {
      name: 'Fight Club',
      price: '$12',
      id: 9090,
    },
    {
      name: 'Terminator 1',
      price: '$8',
      id: 1763,
    },
  ]);

  return (
    <CartContext.Provider value="Cart">
      {props.children}
    </CartContext.Provider>
  );
};