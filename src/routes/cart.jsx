import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  return (
    <section>
      <h1>This is the cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
             {product.quantity} x {product.title} - {parseFloat(product.price * product.quantity).toFixed(2) }€
          </li>
        ))}
      </ul>
      <p>Total price: {parseFloat(total).toFixed(2)}€</p>
    </section>
    
  )
}

export default Cart;
