// src/components/PaginaEntrenadores.py
import React, {useEffect, useState} from 'react';

const PaginaEntrenadores = () => {
    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    // Recupera el id solo una vez cuando el componente se monta
    const id = useState(() => Number(localStorage.getItem('entrenadorId')))[0];
    console.log("Este es el Id: -> ",id);

    useEffect(() => {
        const obtenerClientesPorEntrenador = async () => {
            setCargando(true);
            setError(null);

            try {
                const token = localStorage.getItem('access_token');
              
                if (!token) {
                    throw new Error('No se encontró un token de acceso.');
                }

                const response = await fetch(`http://127.0.0.1:8000/entrenadores/${id}/clientes`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.statusText}`);
                }

                const data = await response.json();
                console.log('Clientes obtenidos:', data); // Verifica los datos recibidos
                setClientes(data);
            } catch (error) {
                console.error("Error al obtener los clientes:", error);
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        if (id) {
            obtenerClientesPorEntrenador();
        } else {
            console.error("No se proporcionó un entrenadorId.");

        }
    }, [id]);

    return (
        <div>
            <h1>Clientes del Entrenador</h1>
            {cargando && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {clientes.length > 0 ? (
                <ul>
                    {clientes.map(cliente => (
                        <li key={cliente.id}>{cliente.nombre}</li>
                    ))}
                </ul>
            ) : (
                !cargando && <p>No hay clientes disponibles.</p>
            )}
        </div>
    );
};

export default PaginaEntrenadores;