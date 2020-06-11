import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  constructor () {
    super();
    this.state = {
      cart: [],
      // cart: storeProducts,
      products: [],
      cartTax: 0,
      cartTotal: 0,
      cartSubTotal: 0,
      modalOpen: false,
      modalProduct: detailProduct,
      detailProduct: detailProduct
    };
  }

  componentDidMount() { this.setProducts() }

  closeModal = () => { this.setState(() => ({ modalOpen: false })) }

  getItem = id => this.state.products.find(product => product.id === id)

  handleDetail = id => this.setState(() => ({ detailProduct: this.getItem(id) }))

  openModal = id => { this.setState(() => ({ modalProduct: this.getItem(id), modalOpen: true })) }

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item => item.id === id));
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.price * product.count;

    this.setState(
      () => ({ cart: [...tempCart] }),
      () => this.addTotals()
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item => item.id === id));
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    if (product.count === 1) return this.removeItem(id);
    product.count -= 1;
    product.total = product.price * product.count;

    this.setState(
      () => ({ cart: [...tempCart] }),
      () => this.addTotals()
    );
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf((this.getItem(id)));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => ({
        cart: [...tempCart],
        products: [...tempProducts]
      }),
      () => this.addTotals()
    );
  }

  clearCart = () => {
    this.setState(() => ({ cart: [], }), () => {
      this.setProducts();
      this.addTotals();
    });
  };

  addTotals = () => {
    let cartSubTotal = 0;
    this.state.cart.map(item => cartSubTotal += item.total);
    const tempTax = cartSubTotal * 0.1;
    const cartTax = parseFloat(tempTax.toFixed(2));
    const cartTotal = cartSubTotal + cartTax;
    console.log({ cartSubTotal, cartTax, cartTotal });
    this.setState(() => ({ cartSubTotal, cartTax, cartTotal }));
  };

  setProducts() {
    let products = [];
    storeProducts.forEach(item => products = [...products, { ...item }]);
    this.setState(() => ({ products }));
  };

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
      () => this.addTotals()
    );
  };

  render() {
    const {
      addToCart,
      handleDetail,
      openModal,
      closeModal,
      increment,
      decrement,
      removeItem,
      clearCart
    } = this;
    return (
      <ProductContext.Provider
        value={ {
          ...this.state,
          addToCart,
          handleDetail,
          openModal,
          closeModal,
          increment,
          decrement,
          removeItem,
          clearCart
        } }>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}

export { ProductProvider, ProductConsumer };
