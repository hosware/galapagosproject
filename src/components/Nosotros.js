import React, { Component } from 'react';
import './Nosotros.css';
import { Link } from 'react-router-dom';

import blueboobies from '../images/blueboobies.png';

export default class Nosotros extends Component {

    render() {
        return (
            <section className="NosotrosPage">
                <p>
                    Hola! Saludos de Envios Piquero. Sabemos lo dificil que es hacer llegar paquetes a las islas, es por eso que nos dedicamos a las exportaciones e importaciones de productos de toda clase a Galápagos.
                    Por ejemplo, te podemos ayudar a enviar materiales de construccion o cajas llenas de galletas.
                    También realizamos envios personales, por ejemplo, si te mudases a Galapagos o quieres enviar un regalo, puedes contar con nosotros.
                </p>

                
            </section>
        )
    }
}