// src/api/axios
import axios from 'axios';

// Ajusta la URL según donde está corriendo tu backend
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',  // Reemplaza con la URL correcta de tu backend
});

export default axiosInstance;