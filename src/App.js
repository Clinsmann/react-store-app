import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Details from './components/Details';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={ ProductList } />
          <Route path='/details' component={ Details } />
          <Route path='/cart' component={ Cart } />
          <Route component={ NotFound } />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
