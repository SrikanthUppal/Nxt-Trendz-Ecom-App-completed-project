/* eslint-disable import/no-extraneous-dependencies */
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import Payment from '../Payment'
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
          <Popup
            modal
            trigger={
              <button className="checkout-button" type="button">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
