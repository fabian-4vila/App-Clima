
# 🌦️ WeatherApp - entre2-gen29

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
- 💅 CSS

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/fabian-4vila/entre2-gen29.git
cd entre2-gen29
```
Instala las dependencias:

```bash
npm install
```
Crea un archivo .env en la raíz del proyecto y coloca tu API Key de OpenWeatherMap:

```env

VITE_API_KEY=tu_clave_de_api_aquí
```
Puedes obtener una API key gratuita desde: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

Ejecuta la aplicación en modo desarrollo:

```bash
npm run dev
```
Abre en tu navegador: http://localhost:5173

## 🧾 Estructura del proyecto
```plaintext

/src
├── components/       # Componentes de UI
├── App.jsx           # Componente principal
├── main.jsx          # Punto de entrada de la app
└── styles.css        # Estilos globales (si aplica)
💡 Mejora futura (opcional)

Cambiar a tema claro/oscuro.
```

