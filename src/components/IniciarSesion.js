// src/components/IniciarSesion
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';  // Asegúrate de ajustar la ruta según tu estructura de carpetas
import './IniciarSesion.css';

const IniciarSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Estado para manejar errores
    const [userType, setUserType] = useState(''); // Estado para determinar el tipo de usuario (cliente o entrenador)
    const navigate = useNavigate(); // Hook para manejar la redirección

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reinicia el estado del error antes de la solicitud
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        try {
            const url = userType === 'cliente'
                ? 'http://127.0.0.1:8000/login_cliente/'
                : 'http://127.0.0.1:8000/login_entrenador/';
            const response = await axiosInstance.post(url, formData);

            if (response.status === 200) {
                console.log('Login exitoso');
                localStorage.setItem('access_token', response.data.access_token); // Almacena el token
                if (userType === 'cliente') {
                    localStorage.setItem('clienteId', response.data.cliente_id);
                    navigate('/pagina-clientes');
                } else {
                    localStorage.setItem('entrenadorId', response.data.entrenador_id);
                    console.log('entrenador_id guardado:', response.data.entrenador_id);
                    navigate('/pagina-entrenadores');
                }
            } else {
                setError(response.data.detail || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            setError('Ocurrió un error al intentar iniciar sesión.');
        }
    };
    return (
        <div className="container">
            <div className="form-container">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userType">Tipo de Usuario:</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="">Seleccione</option>
                            <option value="entrenador">Entrenador</option>
                            <option value="cliente">Cliente</option>
                        </select>
                    </div>
                    {userType && (
                        <>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="email"  // Correcto uso de autoComplete
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"  // Correcto uso de autoComplete
                                />
                            </div>
                        </>
                    )}
                    {error && <p className="error">{error}</p>}
                    <button type="submit" disabled={!userType}>Iniciar Sesión</button>
                </form>
            </div>
            <footer className="footer">
                © 2024 Mi Aplicación
            </footer>
        </div>
    );
};

export default IniciarSesion;