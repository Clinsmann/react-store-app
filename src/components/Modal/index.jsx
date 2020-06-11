import React, { Component } from 'react';

import { ModalContainer } from './styles';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../styles'
import { ProductConsumer } from '../../store';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        { ({ modalOpen, closeModal, modalProduct: { img, title, price } }) =>
          modalOpen ? (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>item added to the cart </h5>
                    <img src={ img } alt="product" className="img-fluid" />
                    <h5>{ title }</h5>
                    <h5 className="text-muted">price : $ { price }</h5>
                    <Link to='/'>
                      <ButtonContainer
                        onClick={ closeModal }
                        className="btn btn-outline-primary my-2 my-sm-0">
                        store
                      </ButtonContainer>
                    </Link>
                    <Link to='/cart'>
                      <ButtonContainer cart
                        onClick={ closeModal }
                        className="btn btn-outline-warning my-2 my-sm-0 ml-3">
                        continue shopping
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          ) : null
        }
      </ProductConsumer>
    );
  };
}
