# Habit Tracking 

## En estre proeycto aprendi  a configurar las rutas  con el `react-router-dom`  tambien  a usar   `useRef()` y `useNavigate()`

 **Recuerdo que un día leí un libro sobre la importancia de seguir y registrar nuestros hábitos. Lo que solía hacer era anotar en una libreta cada actividad que realizaba. Por ejemplo, si leía un libro, marcaba una pequeña palomita. Este sencillo método me ayudó a llevar un registro efectivo de mis hábitos y, con el tiempo, a construir hábitos positivos.**



# Como Desplegar tus proyectos en GitHub Pages

 ## Para desplegar tu proyecto en GitHub Pages utilizando `gh-pages`, sigue estos pasos:

1. **Instala `gh-pages`**:
   Ejecuta el siguiente comando para instalar el paquete `gh-pages` como una dependencia de desarrollo:
  
  ` npm install gh-pages --save-dev`

2. ## Agrega los scripts al archivo package.json:
   *Abre tu archivo package.json y agrega los siguientes scripts en la sección "scripts"*:

```
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```


3. ## Configura la base en vite.config.js:
   *Asegúrate de que tu archivo vite.config.js esté configurado correctamente con la base URL de tu repositorio. Reemplaza `Habit-Tracking` con el nombre de tu repositorio*:

   `import { defineConfig } from 'vite';`
   `import react from '@vitejs/plugin-react';`


    export default defineConfig({
      plugins: [react()],
      base: '/Habit-Tracking/', // Reemplaza 'Habit-Tracking' con el nombre de tu repositorio
      });```
 

4.  ## Despliega tu proyecto:
    *Ejecuta los siguientes comandos en tu terminal para construir y desplegar tu proyecto* :

    `npm run predeploy`
    `npm run deploy`