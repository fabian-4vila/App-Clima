# 🌦️ WeatherApp 

**WeatherApp** es una aplicación web desarrollada con **React** y **Axios**, que permite consultar el clima actual en cualquier ciudad del mundo gracias a la API de [OpenWeatherMap](https://api.openweathermap.org).

## 🌐 Pagina
   [https://app-weather-by-fabian-avila.netlify.app/](https://app-weather-by-fabian-avila.netlify.app/)


## 🚀 Funcionalidades

- Búsqueda de ciudades para obtener el clima actual.
- Visualización de:
  - Temperatura
  - Sensación térmica
  - Descripción general del clima
  - Icono representativo
  - Humedad
  - Velocidad del viento
- Diseño responsive.

## 🛠️ Tecnologías utilizadas

- ⚛️ [React](https://reactjs.org/)
- 🔗 [Axios](https://axios-http.com/)
- ☁️ [OpenWeatherMap API](https://api.openweathermap.org)
- 🖼️ [Pixabay API](https://pixabay.com/api/)
- 💅 CSS
- ⚡ [Vite](https://vitejs.dev/)

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/fabian-4vila/App-Clima.git
cd App-Clima
```
Instala las dependencias:

```bash
npm install
```
Crea un archivo .env en la raíz del proyecto y coloca tu API Key de OpenWeatherMap:

```env
VITE_API_KEY=tu_clave_de_openweathermap_aquí
VITE_API_KEY2=tu_clave_de_pixabay_aquí
```
- Puedes obtener una API Key gratuita de OpenWeatherMap en:
👉 [OpenWeatherMap API](https://home.openweathermap.org/api_keys)

- Y una API Key de Pixabay en:
👉 [Pixabay API](https://pixabay.com/api/docs/)



Ejecuta la aplicación en modo desarrollo:

```bash
npm run dev
```
Abre en tu navegador: http://localhost:5173

## 🧾 Estructura del proyecto
```plaintext

/App-Clima
│├── src/
│    ├── components/
│        └── WeatherCard.jsx
│    ├── App.css        
│    ├── App.jsx
│    ├── index.css                 
│    ├── main.jsx
│├──.eslintrc.cjs
│├──.gitignore
│├──README.md
│├──index.html
│├──package-lock.json
│├──package.json
│└──vite.config.js  
```
💡 Mejora futura (opcional)

Cambiar a tema claro/oscuro.

