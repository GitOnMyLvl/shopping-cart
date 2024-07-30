import { NavLink, Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div>
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
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root;