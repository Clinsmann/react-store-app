import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../styles';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="px-5 navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mr-5" to='/'>
          <i className="fas fa-sms fa-2x"></i>
        </Link>
        <ul className="navbar-nav align-items-center mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Products</Link>
          </li>
        </ul>
        <Link to='/cart'>
          <ButtonContainer className="btn btn-outline-primary my-2 my-sm-0">
            <i className="fas fa-cart-plus mr-2" /> My cart
          </ButtonContainer>
        </Link>
      </nav>
    )
  }
}
