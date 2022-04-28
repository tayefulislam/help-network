
import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>


            <nav className='header'>
                <img src='' alt="" />

                <div>

                    <Link to="/">Home</Link>
                    <Link to="/">Donation</Link>
                    <Link to="/events">Events</Link>


                </div>
            </nav>


        </div>
    );
};

export default Header;