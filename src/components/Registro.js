// src/components/Registro
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from '../api/axios';

const commonValidationSchema = {
    email: yup.string('Ingresa tu email').email('Ingresa un email válido').required('El email es requerido'),
    password: yup.string('Ingresa tu contraseña').min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
};

const trainerValidationSchema = yup.object({
    ...commonValidationSchema,
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Por favor confirme su contraseña'),
    nombre: yup.string('Ingresa tu nombre').required('El nombre es requerido'),
    telefono: yup.string('Ingresa tu teléfono').required('El teléfono es requerido'),
    especialidad: yup.string('Ingresa tu especialidad').required('La especialidad es requerida'),
});

const clientValidationSchema = yup.object({
    ...commonValidationSchema,
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Por favor confirme su contraseña'),
    nombre: yup.string('Ingresa tu nombre').required('El nombre es requerido'),
    telefono: yup.string('Ingresa tu teléfono').required('El teléfono es requerido'),
    entrenador: yup.number().required('El entrenador es requerido'), // Asegúrate de que sea un número
});

const Registro = () => {
    const [userType, setUserType] = useState('Entrenador');
    const [entrenadores, setEntrenadores] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        const fetchEntrenadores = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/entrenadores/');
                console.log('Entrenadores obtenidos: ', response.data);
                setEntrenadores(response.data);
            } catch (error) {
                console.error('Error al obtener los entrenadores:', error.message);
                if (error.response) {
                    console.log('Data:', error.response.data);
                    console.log('Status:', error.response.status);
                    console.log('Headers:', error.response.headers);
                } else if (error.request) {
                    console.log('Request:', error.request);
                } else {
                    console.log('Message:', error.message);
                }
            }
        };

        fetchEntrenadores();
    }, []);

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            nombre: '',
            telefono: '',
            especialidad: '',
            entrenador: '', // Será el ID del entrenador
        },
        validationSchema: userType === 'Entrenador' ? trainerValidationSchema : clientValidationSchema,
        onSubmit: async (values) => {
            console.log('onSubmit begin', values); // Log inicial para depuración
            try {
                const endpoint = userType === 'Entrenador' ? 'http://127.0.0.1:8000/entrenadores/' : 'http://127.0.0.1:8000/clientes/';

                // Estructura de los datos a enviar
                const data = {
                    nombre: values.nombre,
                    email: values.email,
                    telefono: values.telefono,
                    password: values.password,
                };

                if (userType === 'Entrenador') {
                    data.especialidad = values.especialidad; // Agrega especialidad para entrenadores
                } else if (userType === 'Cliente') {
                    data.entrenador_id = values.entrenador; // Agrega entrenador_id para clientes
                }

                console.log('Data to send:', data); // Añadido para depuración
                console.log('Endpoint:', endpoint); // Añadido para depuración

                const response = await axios.post(endpoint, data);
                console.log('Response:', response.data);

                // Mostrar mensaje de éxito
                setSnackbarMessage(`¡${userType} añadido exitosamente!`);
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            } catch (error) {
                console.error('Error al enviar los datos:', error);
                // Mostrar mensaje de error
                setSnackbarMessage(`Error al añadir ${userType}: ${error.message}`);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);

                if (error.response) {
                    console.error('Data:', error.response.data);
                    console.error('Status:', error.response.status);
                    console.error('Headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request:', error.request);
                } else {
                    console.error('Error Message:', error.message);
                }
            }
        },
    });

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Registrar
                </Typography>
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel id="userType-label">Tipo de Usuario</InputLabel>
                    <Select
                        labelId="userType-label"
                        id="userType"
                        value={userType}
                        onChange={handleUserTypeChange}
                        label="Tipo de Usuario"
                    >
                        <MenuItem value="Entrenador">Entrenador</MenuItem>
                        <MenuItem value="Cliente">Cliente</MenuItem>
                    </Select>
                </FormControl>
                <form onSubmit={formik.handleSubmit}>
                  
                    <TextField
                        fullWidth
                        id="nombre"
                        name="nombre"
                        label="Nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="telefono"
                        name="telefono"
                        label="Teléfono"
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                        helperText={formik.touched.telefono && formik.errors.telefono}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        label="Confirmar Password"
                        type="password"
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                        error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                        helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                        margin="normal"
                    />
                    {userType === 'Entrenador' && (
                        <TextField
                            fullWidth
                            id="especialidad"
                            name="especialidad"
                            label="Especialidad"
                            value={formik.values.especialidad}
                            onChange={formik.handleChange}
                            error={formik.touched.especialidad && Boolean(formik.errors.especialidad)}
                            helperText={formik.touched.especialidad && formik.errors.especialidad}
                            margin="normal"
                        />
                    )}
                    {userType === 'Cliente' && (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="entrenador-label">Entrenador</InputLabel>
                            <Select
                                labelId="entrenador-label"
                                id="entrenador"
                                name="entrenador"
                                value={formik.values.entrenador}
                                onChange={formik.handleChange}
                                error={formik.touched.entrenador && Boolean(formik.errors.entrenador)}
                            >
                                {entrenadores.map((entrenador) => (
                                    <MenuItem key={entrenador.id} value={entrenador.id}>
                                        {entrenador.nombre} - {entrenador.especialidad}
                                    </MenuItem>
                                ))}
                            </Select>
                            {formik.touched.entrenador && formik.errors.entrenador && (
                                <Typography color="error" variant="body2">
                                    {formik.errors.entrenador}
                                </Typography>
                            )}
                        </FormControl>
                    )}
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Registrar
                    </Button>
                </form>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
                        {snackbarMessage}
                    </MuiAlert>
                </Snackbar>
            </Box>
        </Container>
    );
};

export default Registro;