import CartContext from '../../Context/CartContext'

import CartListView from '../CartListView'

import CartSummary from '../CartSummary'

import EmptyCart from '../EmptyCart'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <div>
          {cartList.length === 0 ? (
            <EmptyCart />
          ) : (
            <div>
              <CartListView />
              <CartSummary />
            </div>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
