import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProductWrapper } from './styles';
import { ProductConsumer } from '../../store';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            { ({ handleDetail, addToCart, openModal }) => (
              <div className="img-container p-5" onClick={ () => handleDetail(id) }>
                <Link to='/details'>
                  <img src={ img } alt="product" className="card-img-top" />
                </Link>
                <button className='card-btn' disabled={ inCart } onClick={ () => {
                  addToCart(id)
                  openModal(id)
                } }>
                  { inCart ?
                    <p className="text-capitalize mb-0" disabled>In cart</p> :
                    <span><i className="fas fa-cart-plus mr-1 fa-sm" /></span>
                  }
                </button>
              </div>
            ) }
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className='align-self-center mb-0'>{ title }</p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>{ price }
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired
}
