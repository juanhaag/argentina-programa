# Endpoints disponibles

| Método | Endpoint                                       | Descripción                                                        |
|--------|-----------------------------------------------|--------------------------------------------------------------------|
| POST   | /crear-Fruta                                  | Agrega una nueva fruta a la base de datos.                         |
| GET    | /traer-productos                              | Obtiene todos los productos (frutas) de la base de datos.          |
| GET    | /traer-producto/:codigo                       | Obtiene un producto específico por su código.                      |
| GET    | /traer-producto-nombre/:nombre                | Obtiene productos que coinciden con un nombre parcial.            |
| GET    | /traer-producto-categoria/:categoria          | Obtiene productos que pertenecen a una categoría específica.      |
| PATCH  | /editar-fruta                                 | Edita un producto (fruta) específico por su nombre.                |
| DELETE | /eliminar-producto                            | Elimina un producto (fruta) específico por su código.              |

## Requisitos para que funcione
1. Clonar e ingresar al repositorio
2. instalar dependencias con npm install
3. Tener un servidor de Mongo DB
4. configurar un archivo .env con los datos que se indican a continuacion:
```
APP_HOST = http://localhost
APP_PORT = 3000
USER_DB = {USUARIO DE BASE DATOS}
PASS_DB= {PASSWORD BASE DE DATOS}
DB_NAME = {argentina-programa}
```
5. Iniciar el servidor con npm start / node app