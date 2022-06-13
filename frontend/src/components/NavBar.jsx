import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
      <header id="header" className="block-fluid sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-3 bg-white xd">
            <div className="navbar-nav">
                <NavLink className={"nav-link"} to="/">
                    <h5>Home</h5>
                </NavLink>
                <NavLink className={"nav-link"} to="/signin">
                    <h5>SignIn</h5>
                </NavLink>
            </div>
            
        </nav>
    </header>

  )
}

export default NavBar