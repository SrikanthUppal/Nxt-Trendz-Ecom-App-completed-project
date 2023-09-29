import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            Order Total: <span className="total-amount">Rs {total}/-</span>
          </h1>
          <p className="cart-items">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
