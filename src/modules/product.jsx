import PropTypes from 'prop-types'

const Product = ({product}) => {
  return(
    <div className="product-card">
      <img src={product.image} alt={`Image of ${product.title}`} height={200} width={200}/>
      <h3>{product.title || `No Title found`}</h3>
      <p>{product.price || `No Price found`}</p>
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