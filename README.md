## Juan sebastian molina 408752

## Video

https://drive.google.com/drive/folders/1BFZUJ6thYcIsf19usmbNi0xyFjaudfyL?usp=sharing

🧵 ConfeccionesApp – Sistema FullStack de Gestión para Confecciones

Backend en Express + Frontend en Vue 3

📌 Descripción del Proyecto

ConfeccionesApp es un sistema completo para la gestión de un pequeño negocio de confecciones.
Incluye:

✔ Gestión de usuarios/clientes

✔ Catálogo de productos con talla, color y stock

✔ Administración de categorías

✔ Gestión de proveedores

✔ Generación de pedidos

✔ Descuento automático de inventario

✔ Generación automática de facturas por cada pedido

✔ Frontend moderno en Vue 3 (script setup)

✔ Backend organizado por capas con Express + Swagger

Creado como proyecto académico y demostración fullstack.

🚀 Tecnologías Utilizadas
Frontend

Vue 3

Vite

Axios

Vue Router

CSS minimalista / Dashboard UI

Backend

Node.js + Express

Swagger (documentación API)

CORS

Arquitectura por capas

Datos en memoria (sin base de datos)

```
📂 Estructura del Proyecto

ConfeccionesApp/
│── backend/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── data/
│   ├── swagger.js
│   └── server.js
│
│── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── router/
│   │   ├── services/
│   │   └── App.vue
│   ├── index.html
│   └── package.json
│
└── README.md
```

⚙️ Instalación y Ejecución
🟪 1. Clonar el repositorio
git clone https://github.com/tuusuario/ConfeccionesApp.git
cd ConfeccionesApp

🟩 2. Instalar y correr el Backend
cd backend
npm install
npm run dev


El backend correrá en:

http://localhost:3000


Swagger estará disponible en:

http://localhost:3000/api-docs

🟦 3. Instalar y correr el Frontend
cd frontend
npm install
npm run dev


La app se abrirá en:

http://localhost:5173

🧩 Características del Sistema
🧑‍🤝‍🧑 Gestión de Usuarios

Crear / editar / eliminar usuarios

Listado completo

👕 Productos

Catálogo de productos con nombre, precio, tallas, colores y stock

CRUD completo

Control automático de stock

🏷 Categorías

Organización del catálogo

Crear / listar

🚚 Proveedores

CRUD de proveedores

Teléfonos y datos básicos

🛒 Pedidos

Crear pedidos seleccionando productos

Descuento automático del inventario

Registro histórico

🧾 Facturación automática

Cada pedido genera una factura con:

Fecha

Total

ID del pedido asociado

🔌 Comunicación Frontend ↔ Backend

Todo el frontend usa Axios desde:

frontend/src/services/api.js

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

📡 Listado de Endpoints
✔ Usuarios
GET    /usuarios
GET    /usuarios/:id
POST   /usuarios
PUT    /usuarios/:id
DELETE /usuarios/:id

✔ Productos
GET    /productos
GET    /productos/:id
POST   /productos
PUT    /productos/:id
DELETE /productos/:id

✔ Categorías
GET    /categorias
POST   /categorias

✔ Proveedores
GET    /proveedores
POST   /proveedores
PUT    /proveedores/:id
DELETE /proveedores/:id

✔ Pedidos
GET    /pedidos
POST   /pedidos

✔ Facturas
GET    /facturas
GET    /facturas/:id

🗺️ Arquitectura del Backend

El backend sigue una arquitectura por capas:

Rutas → Controladores → Servicios → Datos


Ejemplo:

/productos
   └── productosRoutes.js
           └── productosController.js
                    └── productosService.js
                            └── productos.js (data)


Esta arquitectura facilita:

Mantenimiento

Escalabilidad

Reemplazar data por una BD real fácilmente

🎨 Vista previa del Frontend

(Puedes agregar capturas aquí)

frontend/src/App.vue


Incluye:

Sidebar de navegación

Estilos personalizados con la marca ConfeccionesApp

Dashboard limpio y responsivo

📘 Documentación API con Swagger

La documentación completa está disponible en:

http://localhost:3000/api-docs


Generada desde:

backend/swagger.js


📜 Licencia

MIT License.
