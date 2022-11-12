import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItemDetails} = props
      const {id, name, price, quantity, image} = cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }
      const totalPrice = quantity * price
      return (
        <div>
          <div>
            <image src={image} alt="product-image" />
            <div>
              <p>{name}</p>
              <p>Quantity: {quantity}</p>
              <p>Total: {totalPrice}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickDecrement}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickIncrement}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
