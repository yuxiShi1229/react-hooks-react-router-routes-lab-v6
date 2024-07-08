import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/actors" className="nav-link">
        Actors
      </NavLink>
      <NavLink to="/directors" className="nav-link">
        Directors
      </NavLink>
    </nav>
  );
}

export default NavBar;
