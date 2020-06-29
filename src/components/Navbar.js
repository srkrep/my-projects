import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header >
                <ul className="navbar">
                    <li><Link to="/cart" className="fa fa-shopping-cart fa-2x"> 0 </Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </header>

        );
    }
}


export default NavBar
