import React, { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../../CartContext/CartContext';


const CartList = () => {
  const [carts, setCarts] = useState([
   {
   name: 'Open Water',
   price: '$10',
   id: 12341,
   },
    {
      name: 'Advanced Open Water',
     price: '$12',
     id: 9090,
   },
     {
      name: 'Rescue',
      price: '$8',
      id: 1763,
    },
  ]);

  return (
    <div>
      {carts.map((cart) => {
        return <Cart name ={cart.name} />;
      })}
    </div>
  );
};

export default CartList;