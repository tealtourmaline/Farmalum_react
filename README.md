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
