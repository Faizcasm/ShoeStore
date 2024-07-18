import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ShoeStore</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Category</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
            </ul>
            {/* <div className="navbar-cart">
                <Link to="/cart">
                    <img src="/cart-icon.png" alt="Cart" />
                </Link>
            </div> */}
        </nav>
    );
};

export default Navbar;