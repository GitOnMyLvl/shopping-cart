import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i != index);
    setCart(updatedCart);
  }

  return (
    <section className="max-container">

      {cart.length === 0 ? (
        <>
          <h2>Your cart is currently empty!</h2>
          <NavLink className="orange-text" to={`/store`}>Go to Store</NavLink>
        </>
      ) : (
        <>
          <h1 className="cart-heading">Products in your cart</h1>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-list-item">
                <div className="cart-item">
                  <div className="cart-item-content">
                    <img className="cart-list-img" src={product.image} alt="" width={100} height={100} />
                    <div className="cart-text-with-btn">
                      {product.quantity} x {product.title} - {parseFloat(product.price * product.quantity).toFixed(2)}€ <button className="delete-btn" onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-area">
            <p className="total">Total price: {parseFloat(total).toFixed(2)}€</p>
            <button className="orange-btn checkout-btn">Checkout</button>
          </div>

        </>
      )}

    </section>

  )
}

export default Cart;
