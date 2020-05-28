import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  constructor () {
    super();
    this.state = {
      cart: [],
      products: [],
      modalOpen: true,
      modalProduct: detailProduct,
      detailProduct: detailProduct
    };
  }

  componentDidMount() { this.setProducts() }

  setProducts() {
    let products = [];
    storeProducts.forEach(item => products = [...products, { ...item }]);
    this.setState(() => ({ products }));
  }

  getItem = id => this.state.products.find(product => product.id === id)

  handleDetail = id => this.setState(() => ({ detailProduct: this.getItem(id) }))

  addToCart = id => {
    let products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const product = products[index];

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => ({ products, cart: [...this.state.cart, product] }),
      () => console.log(this.state)
    );
  }

  openModal = id => { this.setState(() => ({ modalProduct: this.getItem(id), modalOpen: true })) }

  closeModal = () => { this.setState(() => ({ modalOpen: false })) }

  render() {
    const { addToCart, handleDetail, openModal, closeModal } = this.state;
    return (
      <ProductContext.Provider
        value={ { ...this.state, addToCart, handleDetail, openModal, closeModal } }>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}

export { ProductProvider, ProductConsumer }
