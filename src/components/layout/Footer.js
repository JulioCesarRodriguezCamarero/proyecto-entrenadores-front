import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <AppBar position="static" component="footer">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2024 Entrenadores Personales. Todos los derechos reservados.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;