import { NavLink } from "react-router-dom"

const Root = () => {
  return (
    <header>
      <div className="header-left">
        <h3>Super Shop</h3>
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to={`home`} className="nav-link" aria-label="Home">Home</NavLink>
            </li>
            <li>
              <NavLink to={`store`} className="nav-link" aria-label="Store">Store</NavLink>
            </li>
            <li>
              <NavLink to={`cart`} className="nav-link" aria-label="Cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Root