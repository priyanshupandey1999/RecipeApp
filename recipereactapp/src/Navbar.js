import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src='images/logo.png' alt="logo" />
            <div className="navlinks">
                <a href="#">Search</a>
                <a href="#">Reach Us</a>
            </div>
        </div>
    )
}

export default Navbar
