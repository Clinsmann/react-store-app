import React from 'react';
import Title from '../Title';
import Product from '../Product';
import { ProductConsumer } from '../../store';

export default () => (
  <div className="py-5">
    <div className="container">
      <Title name="our" title="products" />
      <div className="row">
        <ProductConsumer>
          { ({ products }) =>
            products.map(product =>
              <Product key={ product.id } product={ product } />)
          }
        </ProductConsumer>
      </div>
    </div>
  </div>
)
