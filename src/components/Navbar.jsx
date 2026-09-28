import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2 className="logo">Movie Explorer</h2>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;