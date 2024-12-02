// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Inicio from './components/Inicio';
import Metodos from './components/Metodos';
import Entrenamientos from './components/Entrenamientos';
import Equipo from './components/Equipo';
import Instalaciones from './components/Instalaciones';
import Contacto from './components/Contacto';
import Registro from './components/Registro';
import IniciarSesion from './components/IniciarSesion';
import PaginaEntrenadores from './components/PaginaEntrenadores';
import PaginaClientes from './components/PaginaClientes';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/metodos" element={<Metodos />} />
                    <Route path="/entrenamientos" element={<Entrenamientos />} />
                    <Route path="/equipo" element={<Equipo />} />
                    <Route path="/instalaciones" element={<Instalaciones />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/inicio-sesion" element={<IniciarSesion />} />
                    <Route path="/pagina-entrenadores" element={<PaginaEntrenadores />} />
                    <Route path="/pagina-clientes" element={<PaginaClientes />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;