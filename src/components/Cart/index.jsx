import React, { Component } from 'react';

import Title from '../Title';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';
import CartColumns from './CartColumns';
import { ProductConsumer } from '../../store';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          { value => (value.cart.length > 0 ?
            <>
              <Title name='your' title='cart' />
              <CartColumns />
              <CartList value={ value } />
              <CartTotals value={ value } />
            </> : <EmptyCart />) }
        </ProductConsumer>
      </section>
    );
  }
}
