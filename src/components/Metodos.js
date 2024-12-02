import React from 'react';
import './Metodos.css';
import ImagenEntrenamiento from '../assets/ayuda-entrenamientp.jpg';
import ImagenGrupo from '../assets/entrenamiento-grupo.jpg';

const Metodos = () => {
    return (
        <div className="div-1">
            <h1 className="h1-1">
                Nuestra forma de entender <br/>el ejercicio físico: <br/>
                <strong className="custom-strong">Una experiencia.</strong>
            </h1>
            <div className="content-section">
                <div className="text-section">
                    <h2>Metodología de Entrenamiento</h2>
                    <p>
                        En nuestro centro, abordamos el ejercicio físico con un enfoque personalizado. Creemos en la importancia de adaptar
                        cada entrenamiento según las necesidades y objetivos personales de nuestros clientes.
                    </p>
                </div>
                <div className="image-section">
                    <img src={ImagenEntrenamiento} alt="Ejercicio personalizado" />
                </div>
            </div>
            <div className="content-section">
                <div className="image-section">
                    <img src={ImagenGrupo} alt="Entrenamiento en grupo" />
                </div>
                <div className="text-section">
                    <h2>Entrenamiento en Grupo</h2>
                    <p>
                        Ofrecemos sesiones en grupo para quienes prefieren la motivación de entrenar junto a otras personas.
                        Nuestras clases están diseñadas para fomentar el trabajo en equipo y la diversión.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Metodos;