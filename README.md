# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Configuración de WSL
https://learn.microsoft.com/en-us/windows/wsl/install

correr el siguiente comando en PowerShell
```
wsl --install
```
posteriormente, abrir ubuntu para trabajar en la consola. Allí, ejecutar los siguientes coomandos:
para clonar el repositorio:
```
git clone https://github.com/tealtourmaline/Farmalum_react.git
```
luego de clonar el repositorio
```
# Entrar a la carpeta del repositorio recién clo
cd Farmalum_react/

#abrir el proyecto en visual studio code
code .

sudo apt-get update

sudo apt install npm

npm install

npm install vite --save-dev

npm install axios

npm install react-bootstrap bootstrap

npm run dev
```
en caso de error en esta parte, es necesario ejecutar los siguientes comandos para actualizar Node.js, y luego volver a correr npm install y npm run dev
```
# Instala nvm si aún no lo tienes
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Cierra y vuelve a abrir la terminal o ejecuta el siguiente comando para cargar nvm
source ~/.bashrc

# Instala la última versión de Node.js
nvm install 16.0.0

# Establece la versión recién instalada como la versión predeterminada
nvm use 16.0.0

```

una vez se logre ejecutar npm run dev, se puede presional el shortcut **o** para abrir la aplicación en navegador

# Configuración Base de datos: Postgres

Instalar docker
- Linux: 
    sudo apt install docker-ce

- [Windows (docker desktop)](https://www.docker.com/products/docker-desktop/)

Descargar la imagen de postgres
 - docker pull postgres:latest

 Inicializar el contenedor
 - docker run --name postgres_db -e POSTGRES_PASSWORD=unaClav3 -d -p 5433:5432 postgres:latest

Entramos a ejecutar comandos con sql
- psql -U postgres

Creamos la base de datos
- create database db_cart_springboot;

Conectarse a la base de datos 
- \c db_cart_springboot;

Seguimos los pasos en [Script de implementacion en postgres](Script_implementacion_BD.sql)

## Endpoints

A continuación se mostrarán los endpoints del backend

http://127.0.0.1:8080/

- Obtener todas las Categorias 

    (GET)

        /categories

- Obtener categoría por id

    (GET)

        /categories/{id}

- Obtener todos los productos

    (GET)

        /products

- Obtener todos los productos por categoría

    (GET)

        /products/{category_name}

- Obtener los ultimos productos añadidos con 1 o mas de stock

    (GET)

        /products/last

- Busqueda de procutos

    (GET)

        /products/search/{name}

- Obtener todos los usuarios

    (GET)

        /users

- Obtener usuario por id

    (GET)

        /users/{id}

- Crear usuario

    (POST)

        /users

        JSON:
        {
            "username": "{String}",
            "password": "{String}",
            "admin": {boolean},
            "active": {boolean},
            "email": "{String}"
        }

- Actializar usuario

    (PUT)

        /users/{id}

        JSON:
        {
            "id": "{Int}",
            "username": "{String}",
            "password": "{String}",
            "admin": {boolean},
            "active": {boolean},
            "email": "{String}"
        }

- Borrar usuario (No lo borra, pasa su estado de activo a inactivo)

    (DELETE)

        /users/{id}

- Ver si un usuario es admin

    (GET)

        /users/isAdmin/{username}

- Verificar login (devuelve un usuario)

    (POST)

        /users/login

        JSON:
        {
            "username": "{String}",
            "password": "{String}",
        }