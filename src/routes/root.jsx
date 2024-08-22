import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom"
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Footer from "../modules/footer";

const Root = () => {
  const { cart } = useContext(CartContext);
  const amount = cart.reduce((acc, product) => acc + product.quantity, 0)

  return (
    <>
      <header>
        <div className="header-left">
          <h3>Super Shop</h3>
        </div>
        <div className="header-right">
          <nav>
            <ul className="nav-list">
              <li>
                <NavLink to={``} className="nav-link" aria-label="Home">Home</NavLink>
              </li>
              <li>
                <NavLink to={`store`} className="nav-link" aria-label="Store">Store</NavLink>
              </li>
              <li>
                <NavLink to={`cart`} className="nav-link" aria-label="Cart">
                  <div className="cart-link">
                    <p>{amount}</p>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-section">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}

export default Root;