// src/components/Entrenamientos.js
import React, { useState, useEffect } from 'react';
import './Entrenamientos.css';

const Entrenamientos = () => {
    const [visibleSection, setVisibleSection] = useState(1);

    useEffect(() => {
        const sectionsCount = 4;

        const timer = setInterval(() => {
            setVisibleSection((prevSection) => (prevSection +1 ) % sectionsCount);
        }, 2000); // Cambia la sección cada 2 segundo2

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container">
            <div className="content" style={{ padding: '20px', position: 'relative', overflow: 'hidden', flex: '1 0 auto' }}>
                <h1>Entrenamientos</h1>

                <div className={`section ${visibleSection === 0 ? 'fade' : ''}`}>
                    <h2>Introducción</h2>
                    <p>En esta página, encontrarás diferentes tipos de entrenamientos que puedes incorporar en tu rutina de ejercicios.</p>
                </div>

                <div className={`section ${visibleSection === 1 ? 'fade' : ''}`}>
                    <h2>Entrenamiento de Fuerza</h2>
                    <img src="/assets/fuerza.jpg" alt="Entrenamiento de Fuerza" style={{ width: '100%', height: 'auto' }} />
                    <p>El entrenamiento de fuerza es ideal para desarrollar músculo y mejorar tu fuerza general. A continuación, algunos de los ejercicios más comunes:</p>
                    <ul>
                        <li>Levantamiento de pesas</li>
                        <li>Sentadillas</li>
                        <li>Press de banca</li>
                    </ul>
                </div>

                <div className={`section ${visibleSection === 2 ? 'fade' : ''}`}>
                    <h2>Entrenamiento Cardiovascular</h2>
                    <img src="/assets/cardio.jpg" alt="Entrenamiento Cardiovascular" style={{ width: '100%', height: 'auto' }} />
                    <p>El entrenamiento cardiovascular es crucial para mantener un corazón sano y mejorar la resistencia. Aquí tienes algunos ejercicios recomendados:</p>
                    <ul>
                        <li>Correr</li>
                        <li>Andar en bicicleta</li>
                        <li>Nadar</li>
                    </ul>
                </div>

                <div className={`section ${visibleSection === 3 ? 'fade' : ''}`}>
                    <h2>Entrenamiento de Flexibilidad</h2>
                    <img src="/assets/flexi2.jpg" alt="Entrenamiento de Flexibilidad" style={{ width: '90%', height: 'auto' }} />
                    <p>El entrenamiento de flexibilidad ayuda a mejorar el rango de movimiento de tus articulaciones. Algunos ejercicios recomendados son:</p>
                    <ul>
                        <li>Estiramientos estáticos</li>
                        <li>Yoga</li>
                        <li>Pilates</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Entrenamientos;