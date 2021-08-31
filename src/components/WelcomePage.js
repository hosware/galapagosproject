import React, { Component } from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

import blueboobies from '../images/blueboobies.png';

export default class WelcomePage extends Component {

    render() {
        return (
            <section className="introPage">
                <div className='introPage'>
                    <div className='banner'>
                        <img class= "imageFront" src={blueboobies}></img>
                        <div class="subbanner">
                        <h1>Envíos Piquero</h1>
                        <h2>Envios 📦 a Galápagos 🐢 </h2>
                        <div class="subsubbanner">
                          <button className = "buttonFormat"> <Link to="signup"> <span className= "hoverfun"> WhatsApp </span> </Link></button>
                          <button className = "buttonFormat"> <Link to="signup"> <span className= "hoverfun">  Llámanos </span></Link></button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}