import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor para manejar errores de manera consistente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      error.message = "Tiempo de espera agotado. Verifica que el servidor esté ejecutándose.";
    } else if (error.code === "ERR_NETWORK" || error.message.includes("Network Error")) {
      error.message = "Error de conexión. Verifica que el backend esté ejecutándose en http://localhost:3000";
    }
    return Promise.reject(error);
  }
);
