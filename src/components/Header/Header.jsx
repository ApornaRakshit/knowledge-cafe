import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
                <a href="Inspiration">Inspiration</a>
                <a href="Learn Designer">Learn Designer</a>
                <a href="Hire Designer">Hire Designer</a>
                <a href="Sign In">Sign In</a>
                <a href="Sign Up">Sign Up</a>
            </div>
        </nav>
    );
};

export default Header;