import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header({cartItems}) {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to = "/" className='logo'>
                    Clothing Shop Starter Project
                </Link>
            </h1>
        </div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/cart" className='cart'>Cart
                      <span>{cartItems.lenght === 0 ? "" : cartItems.lenght}</span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header