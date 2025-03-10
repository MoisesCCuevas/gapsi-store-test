# Gapsi Store Test

Este es un proyecto de prueba para una tienda en línea utilizando React, Redux y TypeScript.

## Estructura del Proyecto

- **src**: Contiene el código fuente del proyecto.
  - **api**: Módulos para interactuar con APIs externas.
  - **components**: Componentes reutilizables de la aplicación.
  - **store**: Configuración de Redux y slices.
  - **App.tsx**: Componente principal de la aplicación.
  - **main.tsx**: Punto de entrada de la aplicación.
  - **index.css** y **App.css**: Estilos globales y específicos de la aplicación.
- **public**: Archivos públicos como `index.html`.
- **.env**: Variables de entorno.
- **.gitignore**: Archivos y directorios ignorados por Git.
- **package.json**: Dependencias y scripts del proyecto.
- **tsconfig.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración de Vite.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia la aplicación en modo de desarrollo. 

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.

## Dependencias

- **React**: Biblioteca para construir interfaces de usuario.
- **Redux**: Biblioteca para el manejo del estado global.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos web.
- **Material UI**: Biblioteca de componentes de interfaz de usuario.

## Configuración de ESLint

El proyecto utiliza ESLint para mantener la calidad del código. La configuración se encuentra en `eslint.config.js`.

## Variables de Entorno

El proyecto utiliza variables de entorno definidas en el archivo `.env`:

- `VITE_API_PRODUCTS`: URL de la API de productos.
- `VITE_API_KEY`: Clave de la API.
