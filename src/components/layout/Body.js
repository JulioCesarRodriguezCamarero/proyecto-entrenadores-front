// src/components/layout
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import entrenador1 from '../../assets/entrenador1.jpg';  // Asegúrate de tener esta imagen en la ruta correcta
import entrenador2 from '../../assets/entrenador2.jpg';  // Asegúrate de tener esta imagen en la ruta correcta
import './Body.css';
const Body = ({ children }) => {
    return (
        <Container className="body-background">
            {children}
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Bienvenido a Entrenadores Personales
                </Typography>
                <Typography variant="body1" component="p" style={{ marginBottom: '20px' }}>
                    Aquí encontrarás los mejores entrenadores para ayudarte a alcanzar tus metas de salud y estado físico. Nuestro equipo está compuesto por profesionales calificados y apasionados por el fitness.
                </Typography>
            </Box>
            <Box my={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Conoce a Nuestros Entrenadores
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
                            <Box flexBasis={{ xs: '100%', sm: '50%' }} m={2}>
                                <img src={entrenador2} alt="Entrenador 1" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
                            </Box>
                            <Box flexBasis={{ xs: '100%', sm: '50%' }} m={2}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Juan Pérez
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Con más de 10 años de experiencia, Juan es especialista en entrenamiento de fuerza y acondicionamiento físico.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row-reverse' }} alignItems="center">
                            <Box flexBasis={{ xs: '100%', sm: '50%' }} m={2}>
                                <img src={entrenador1} alt="Entrenador 2" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
                            </Box>
                            <Box flexBasis={{ xs: '100%', sm: '50%' }} m={2}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Ana López
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Ana es una entrenadora certificada en yoga y pilates, ayudándote a mejorar tu flexibilidad y bienestar general.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Body;