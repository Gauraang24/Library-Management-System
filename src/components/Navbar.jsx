import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center gap-8 mx-4'>
            <div className='flex items-center'>
                <img src="/images/logo.png" alt="Logo" />
                <p className='font-bold text-2xl'>BookNest</p>
            </div>

            <div>
                <ul className='flex gap-4'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/browse'>Browse Books</Link></li>
                    <li><Link to='/details'>Add Book</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
