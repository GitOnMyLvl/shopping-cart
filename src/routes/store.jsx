import { useEffect, useState } from "react";
import Product from "../modules/product";

const useStoreData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if(response.status >= 400){
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
    }, []);
    return { products, error, loading }; 
}

const Store = () => {
  const { products, error, loading } = useStoreData(); 
  if (loading) return <p>Loading...</p>
  if (error) return <p>A network error was encountered</p>
  return(
    <>
      <h1>This is the Store</h1>
      <div className="products">
        {products.map((product) => {
          return <Product product={product} key={product.id}/>
        })}
      </div>
    </>
  )
}

export default Store;