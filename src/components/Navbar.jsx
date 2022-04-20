import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const { totalItem } = useSelector((state) => state.cart);
    return (
        <div className="container navbar-stick">
            <div className="navbar">
                <span className="logo">REDUX STORE</span>
                <div>
                    <Link className="navLink" to="/">
                        Home
                    </Link>
                    <Link className="navLink" to="/cart">
                        Cart
                    </Link>
                    <span className="cartCount">Cart items : {totalItem}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
