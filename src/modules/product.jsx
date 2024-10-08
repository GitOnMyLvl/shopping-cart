import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(0)
  const { addToCart, cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const cartItem = cart.find(item => item.id === product.id);
    if(cartItem){
      setQuantity(cartItem.quantity);
    }
  }, [cart, product.id]);

  const updateCartQuantity = (newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      addToCart(product, 1);
    }
  };

  const handleIncrease = () => {
    if(quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateCartQuantity(newQuantity);
    }
  };

  const handleDecrease = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateCartQuantity(newQuantity);
    } else {
      setQuantity(0);
      updateCartQuantity(0);
    }
  };

  return(
    <div className="product-card">
      <img src={product.image} alt={`Image of ${product.title}`} height={200} width={200}/>
      <h3>{product.title || `No Title found`}</h3>
      <p>{parseFloat(product.price).toFixed(2) + `€`|| `No Price found`}</p>
      <div>
        {quantity === 0 ? (
          <>
            <button onClick={handleAddToCart} className='add-btn'>Add to Cart</button>
          </>
        ) : 
        (
          <div className="add-btn number-btn orange-btn">
            {quantity === 1 ? (<><button onClick={handleDecrease} className="quantity-btn"><FontAwesomeIcon className="trash-icon" icon={faTrash}/></button></>)  :  (<><button onClick={handleDecrease} className="quantity-btn">-</button></>)}
            <p>{quantity}</p>
            <button onClick={handleIncrease} className="quantity-btn">+</button>
          </div>
      )}
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

export default Product