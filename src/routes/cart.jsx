import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i != index);
    setCart(updatedCart);
  }

  return (
    <section>
      <h1>This is the cart</h1>
      {cart.length === 0 ? (
        <>
          <h2>Your cart is currently empty!</h2>
          <NavLink to={`/store`}>Go to Store</NavLink>
        </>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.quantity} x {product.title} - {parseFloat(product.price * product.quantity).toFixed(2)}€ <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <p>Total price: {parseFloat(total).toFixed(2)}€</p>
          <button>Checkout</button>
        </>
      )}

    </section>

  )
}

export default Cart;
