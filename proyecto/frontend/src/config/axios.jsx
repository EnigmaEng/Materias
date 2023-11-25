import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_URL_DEV,
    withCredentials: true,
});

// VITE_URL_DEV  
export default clienteAxios;