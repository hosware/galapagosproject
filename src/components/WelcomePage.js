import React, { Component } from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

// import background from '../images/background.gif';

export default class WelcomePage extends Component {

    render() {
        return (
            <section>
                <div className='introBox'>
                    <div className='banner'>
                        <img></img>
                        <h1>Envios Piquero</h1>
                        <h2>Exporta e importa 📦 a Galápagos 🐢 o cualquier envio 📨 </h2>
                        <div>
                          <button className = "signUpUnder"> <Link to="signup"> <span className= "hoverfun"> WhatsApp </span> </Link></button>
                          <button className = "signUpUnder"> <Link to="signup"> <span className= "hoverfun">  Llámanos </span></Link></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}