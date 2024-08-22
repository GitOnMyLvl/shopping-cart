import { NavLink } from "react-router-dom";

const Index = () => {
  return(
    <section className="max-container hero">
      <h1>Welcome to the <span className="orange-text">Super Store</span></h1>
      <p>Check ou our <NavLink className="orange-text" to={`/store`}>newest offers</NavLink></p>
    </section>
  )
}

export default Index;