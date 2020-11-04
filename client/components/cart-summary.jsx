import React from 'react';
import CartSummaryItems from './cart-summary-item';

export default class CartSummary extends React.Component {

  constructor(props) {
    super(props);
    this.handleCatalogClick = this.handleCatalogClick.bind(this);
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  }

  componentDidMount() {
    this.setState({ quantity: this.props.quantity });
  }

  handleCatalogClick() {
    this.props.setView('catalog', {});
  }

  handleCheckoutClick() {
    this.props.setView('checkout', {});
  }

  updateItemQuantity(cartItemId, quantity) {
    this.props.updateItemQuantity(cartItemId, quantity);
  }

  render() {
    const totalPrice = this.props.cart.reduce((accumulator, item) => {
      return accumulator + (item.price * item.quantity / 100);
    }, 0);
    const cartItems = this.props.cart.map(item => {
      return <CartSummaryItems
        key={item.cartItemId}
        cartItemId={item.cartItemId}
        image={item.image}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        updateQuantity = {this.props.updateItemQuantity}
        shortDescription={item.shortDescription}/>;
    });
    return (
      <div className="container col-9 m-3">
        <div className="row">
          <a
            type="button"
            className="back btn btn-link border-0 mb-3 text-muted text-decoration-none"
            href="#"
            onClick={this.handleCatalogClick}>
            &lt; Back to catalog
          </a>
        </div>
        <h2>My Cart</h2>
        {cartItems}
        <div className="row d-flex justify-content-between align-items-center m-0">
          <h2 className="my-3">Item Total: ${totalPrice.toFixed(2)}</h2>
          <button
            type="button"
            className="btn btn-primary border-0 px-3 py-0 d-none d-md-block"
            style={{ height: 50 }}
            onClick={this.handleCheckoutClick}>
            Checkout
          </button>
        </div>
        <div className="row d-flex justify-content-center align-items-center m-0">
          <button
            type="button"
            className="btn btn-primary border-0 p-0 col-4 d-md-none"
            style={{ height: 50 }}
            onClick={this.handleCheckoutClick}>
              Checkout
          </button>
        </div>
      </div>
    );
  }
}
