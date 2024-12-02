// src/components/PaginaClientes
import React, { useEffect, useState } from 'react';

const PaginaClientes = () => {
    const [entrenador, setEntrenador] = useState(null);
    const [rutinas, setRutinas] = useState([]);
    const [nutricion, setNutricion] = useState([]);

    useEffect(() => {
        const clienteId = localStorage.getItem('clienteId');
         console.log(clienteId);
        if (!clienteId) {
            console.error('No se ha encontrado el ID del cliente');
            return;
        }

        fetch(`http://127.0.0.1:8000/clientes_info/${clienteId}/`)
            .then(response => response.json())
            .then(data => {
                setEntrenador(data.entrenador || null);
                setRutinas(data.rutinas || []);
                setNutricion(data.nutricion || []);
            })
            .catch(error => console.error('Error al cargar los datos:', error));
    }, []);
    return (
        <div>
            <h1>PaginaClientes</h1>
            {entrenador && (
                <div>
                    <h2>Entrenador:</h2>
                    <p>{entrenador.nombre}</p>
                </div>
            )}
            {rutinas.length > 0 && (
                <div>
                    <h2>Rutinas:</h2>
                    <ul>
                        {rutinas.map((rutina, index) => (
                            <li key={index}>{rutina.descripcion}</li>
                        ))}
                    </ul>
                </div>
            )}
            {nutricion.length > 0 && (
                <div>
                    <h2>Nutrición:</h2>
                    <ul>
                        {nutricion.map((plan, index) => (
                            <li key={index}>{plan.plan_nutricional}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PaginaClientes;