import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
        <h1>
            <a href="index.html"><i className="fas fa-code"></i>DevConnector</a>
        </h1>
        <ul>
            <li a href="profiles.html">Developers</li>
            <li a href="register.html">Register</li>
            <li a href="login.html">Login</li>
        </ul>
    </nav>
  )
}

export default Navbar;