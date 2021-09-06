import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

const Navbar = () => {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <strong>ACCOUNT MANAGER</strong>
          </NavLink>
      
        </div>
        <div id="navbarBasicExample" className="navbar-start">
          <div className="navbar-start">
            <NavLink className="navbar-item add_account" to="/add-account">
             <button> Add account  <i class="fas fa-plus"></i></button> 
            </NavLink>
            <NavLink className="navbar-item see_accounts" to="/">
             <button>See accounts   <i class="fas fa-eye"></i></button> 
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink className="button is-info" to="/signup">
                <strong>Sign up</strong>
              </NavLink>
              <NavLink className="button is-light" to="/login">
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;