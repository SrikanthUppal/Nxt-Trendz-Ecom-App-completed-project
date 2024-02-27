import {useContext, useState} from 'react'
import {IoCheckmarkCircle} from 'react-icons/io5'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentMethodsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisabled: false,
  },
]

const Payment = () => {
  const {cartList} = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const updatePaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }

  const onPlaceOrder = () => setOrderPlaced(true)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const renderPaymentOptions = () => (
    <ul className="payment-options-list">
      {paymentMethodsList.map(eachOption => (
        <li key={eachOption.id} className="payment-method-input-item">
          <input
            className="payment-method-input"
            id={eachOption.id}
            type="radio"
            name="paymentMethod"
            disabled={eachOption.isDisabled}
            onChange={updatePaymentMethod}
          />
          <label
            className={`payment-method-label ${
              eachOption.isDisabled ? 'disabled-label' : ''
            }`}
            htmlFor={eachOption.id}
          >
            {eachOption.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="popup-container">
      {orderPlaced ? (
        <div className="payment-success-container">
          <IoCheckmarkCircle size={80} color="green" />
          <p className="order-placed-success">
            Your order has been placed successfully
          </p>
        </div>
      ) : (
        <>
          <h1 className="payments-heading">Payments Details</h1>
          <p className="payments-sub-heading">Payment Method</p>
          {renderPaymentOptions()}
          <div className="order-details">
            <p className="payments-sub-heading">Order details:</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: RS {getTotalPrice()}/-</p>
          </div>
          <button
            disabled={paymentMethod === ''}
            type="button"
            className="confirm-order-button"
            onClick={onPlaceOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}

export default Payment
