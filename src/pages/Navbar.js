import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </nav>
  );
}

export default NavBar;