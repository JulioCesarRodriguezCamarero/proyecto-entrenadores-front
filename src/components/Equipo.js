// src/components/Equipo.js
import React from 'react';
import './Equipo.css'; // Importa el archivo CSS para estilos

const Entrenador = ({ nombre, especialidad, imagen }) => {
    return (
        <div className="entrenador">
            <img src={imagen} alt={nombre} className="imagen-entrenador" />
            <div className="detalles-entrenador">
                <h2>{nombre}</h2>
                <p>{especialidad}</p>
            </div>
        </div>
    );
};

const Equipo = () => {
    const entrenadores = [
        { nombre: 'Martina ', especialidad: 'Elasticidad', imagen: 'assets/flexi2.jpg' },
        { nombre: 'Alejandro ', especialidad: 'Cardio', imagen: 'assets/cardio.jpg' },
        { nombre: 'Mar', especialidad: 'Fuerza', imagen: 'assets/fuerza.jpg' },
    ];

    return (
        <div className="container">
            <h1>Equipo</h1>
            <div className="equipo">
                {entrenadores.map((entrenador, index) => (
                    <Entrenador
                        key={index}
                        nombre={entrenador.nombre}
                        especialidad={entrenador.especialidad}
                        imagen={entrenador.imagen}
                    />
                ))}
            </div>
            <footer className="footer">
                <p>&copy; 2024 Mi Sitio de Entrenadores</p>
            </footer>
        </div>
    );
};

export default Equipo;