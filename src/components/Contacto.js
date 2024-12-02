// src/components/Contacto
import React from 'react';
import './Contacto.css'; // Asegúrate de crear y personalizar este archivo CSS

const Contacto = () => {
    return (
        <div className="contacto-container">
            <h1 className="titulo-contacto">Contáctanos</h1>
            <div className="informacion-contacto">
                <div className="detalle-contacto">
                    <h2>Teléfono</h2>
                    <p>+34 123 456 789</p>
                </div>
                <div className="detalle-contacto">
                    <h2>Correo Electrónico</h2>
                    <p>info@nuestraempresa.com</p>
                </div>
                <div className="detalle-contacto">
                    <h2>Redes Sociales</h2>
                    <p>
                        Síguenos en:
                        <ul>
                            <li>Facebook: <a href="https://www.facebook.com/nuestraempresa" target="_blank" rel="noopener noreferrer">@nuestraempresa</a></li>
                            <li>Twitter: <a href="https://twitter.com/nuestraempresa" target="_blank" rel="noopener noreferrer">@nuestraempresa</a></li>
                            <li>Instagram: <a href="https://www.instagram.com/nuestraempresa" target="_blank" rel="noopener noreferrer">@nuestraempresa</a></li>
                        </ul>
                    </p>
                </div>
                <div className="detalle-contacto">
                    <h2>Dirección</h2>
                    <p>Calle Ejemplo, 123, Ciudad, País</p>
                </div>
            </div>
        </div>
    );
};

export default Contacto;