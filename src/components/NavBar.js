  
import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return (
                    <nav>
                        <ul>
                            <li> <Link to='/nosotros'> <h4>Nosotros</h4></Link></li>
                            <li> <Link to='/contactanos'> <h4>Contáctanos</h4></Link></li>
                        </ul> 
                    </nav>
        )
    }
}