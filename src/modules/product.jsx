import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

const Product = ({product}) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleChange = (event) => setSelectedNumber(parseInt(event.target.value, 10))

  const handleAddToCart = () => {
    addToCart(product, selectedNumber)
  }

  return(
    <div className="product-card">
      <img src={product.image} alt={`Image of ${product.title}`} height={200} width={200}/>
      <h3>{product.title || `No Title found`}</h3>
      <p>{parseFloat(product.price).toFixed(2) + `€`|| `No Price found`}</p>
      <div>
        <label htmlFor="dropdown">Choose amount: </label>
        <select name="amount-dropdown" id="dropdown" value={selectedNumber} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

export default Product