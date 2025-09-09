import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Donia's Shop</span>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>
          {localStorage.getItem("token") && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </NavLink>
          )}
          {!localStorage.getItem("token") && (
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
