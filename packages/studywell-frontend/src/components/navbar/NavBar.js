import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css'

const Navbar=()=>{
    return (    
        <div className='nav_bar'>
            <div>
                <NavLink to="/" className='title'>Work</NavLink>
            </div>
            <div>
                <NavLink to="/short" className='title'>Short</NavLink>
            </div>
            <div>
                <NavLink to="/long" className='title'>Long</NavLink>
            </div>
        </div>
    )

}

export default Navbar;