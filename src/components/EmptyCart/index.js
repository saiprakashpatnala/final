import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      className="cart-empty-img"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
  </div>
)

export default EmptyCart