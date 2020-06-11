import React from 'react';
import CartItem from './CartItem';

export default ({ value }) => {
  const { cart } = value;
  console.log(value, cart)
  return (
    <div className='container-fluid'>
      { cart.map(item => <CartItem item={ item } key={ item.id } value={ value } />) }
    </div>
  )
}
