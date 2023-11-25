import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_URL
});

// VITE_URL_DEV  
export default clienteAxios;