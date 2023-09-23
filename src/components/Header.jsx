import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4994/4994354.png"
              alt="Brooklyn Community Board for Volunteering"
              className = "header-logo"
            />
            <h1>Brooklyn Volunteering!</h1>
        </header>
    )
}

export default Header;