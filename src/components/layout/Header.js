// src/components/layout/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const buttonStyles = {
    transition: "all 0.3s ease",
    '&:hover': {
        backgroundColor: 'blue',
        transform: 'scale(1.1)',
    },
};

const separatorStyles = {
    margin: '0 10px', // Espacio a cada lado del separador
    fontSize: '30px', // Tamaño del texto del separador
};

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Entrenadores Personales
                </Typography>
                <Button color="inherit" component={Link} to="/" sx={buttonStyles}>Inicio</Button>
                <Button color="inherit" component={Link} to="/metodos" sx={buttonStyles}>Nuestro Método</Button>
                <Button color="inherit" component={Link} to="/entrenamientos" sx={buttonStyles}>Entrenamientos</Button>
                <Button color="inherit" component={Link} to="/equipo" sx={buttonStyles}>Equipo</Button>
                <Button color="inherit" component={Link} to="/instalaciones" sx={buttonStyles}>Instalaciones</Button>
                <Button color="inherit" component={Link} to="/contacto" sx={buttonStyles}>Contacto</Button>
                <Button color="inherit" component={Link} to="/registro" sx={buttonStyles}>Registro</Button>
                <Button color="inherit" component={Link} to="/inicio-sesion" sx={buttonStyles}>Iniciar-Sesión</Button>
                <Typography sx={separatorStyles}>||</Typography>
                <Button color="inherit" component={Link} to="#" sx={buttonStyles} startIcon={<FacebookIcon />}>Facebook</Button>
                <Button color="inherit" component={Link} to="#" sx={buttonStyles} startIcon={<InstagramIcon />}>Instagram</Button>
                <Button color="inherit" component={Link} to="#" sx={buttonStyles} startIcon={<TwitterIcon />}>X</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;