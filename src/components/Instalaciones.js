// src/components/Instalaciones
import React from 'react';
import './Instalaciones.css'; // Asegúrate de crear también el archivo CSS
import instalaciones from '../assets/instalacioes-gym.jpg';
import piscina from '../assets/piscina-gym.jpg';
import masaje from '../assets/Massagem.jpg';

const Instalaciones = () => {
    return (
        <div className="instalaciones-container">
            <h1 className="titulo-principal">Nuestras Instalaciones</h1>
            <div className="seccion-contenido">
                <div className="texto">
                    <h2>Gimnasio Equipado</h2>
                    <p>
                        Contamos con un gimnasio completamente equipado con la última tecnología para asegurar que nuestros clientes
                        dispongan de todas las herramientas necesarias para alcanzar sus objetivos de fitness.
                    </p>
                </div>
                <div className="imagen">
                    <img src={instalaciones} alt="Gimnasio" />
                </div>
            </div>
            <div className="seccion-contenido">
                <div className="imagen">
                    <img src={piscina} alt="Piscina" />
                </div>
                <div className="texto">
                    <h2>Piscina Climatizada</h2>
                    <p>
                        Disfruta de nuestra piscina climatizada, perfecta para nadar en cualquier época del año. Ofrecemos clases de natación
                        y sesiones libres para nuestros miembros.
                    </p>
                </div>
            </div>
            <div className="seccion-contenido">
                <div className="texto">
                    <h2>Zona de Relajación</h2>
                    <p>
                        Después de un buen entrenamiento, relájate en nuestra zona de spa, que incluye sauna y baños turcos, para una experiencia
                        completa.
                    </p>
                </div>
                <div className="imagen">
                    <img src={masaje} alt="Zona de Relajación" />
                </div>
            </div>
        </div>
    );
};

export default Instalaciones;