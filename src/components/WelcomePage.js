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
                        <img className= "imageFront" src={blueboobies}></img>
                        <div className="subbanner">
                        <h1 className= "mainTitle">Envíos <span className="piquero">Piquero</span></h1>
                        <h2 className="tagLine">Envios 📦 a Galápagos 🐢 </h2>
                        <div class="subsubbanner">
                          <button className = "buttonFormat"> <Link to="signup"> <span className= "hoverfunWS hoverfun"> WhatsApp </span> </Link></button>
                          <button className = "buttonFormat"> <Link to="signup"> <span className= "hoverfunCall hoverfun">  Llámanos </span></Link></button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}