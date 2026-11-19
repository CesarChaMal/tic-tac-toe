# Tres en raya

Juego de tres en raya para dos personas, creado con React y Vite.

## Requisitos

- Node.js y npm

## Instalación y desarrollo

Desde la carpeta del proyecto, ejecuta:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección que indique Vite (normalmente `http://localhost:5173/`).

## Cómo jugar

- Dos jugadores se turnan: X empieza y luego juega O.
- Selecciona una casilla vacía para colocar tu símbolo.
- Gana quien consiga tres símbolos en línea, horizontal, vertical o diagonalmente.
- Si se ocupan todas las casillas sin ganador, la partida termina en empate.
- Pulsa **Reiniciar partida** para empezar de nuevo.

## Compilar para producción

```bash
npm run build
```

Vite genera los archivos de producción en `dist/`. Para probar esa compilación localmente:

```bash
npm run preview
```

## Instalar como aplicación (PWA)

La aplicación puede instalarse desde un navegador compatible y guarda en caché la interfaz para abrirla sin conexión después de la primera visita.

- En Android o escritorio, abre el sitio publicado en Chrome o Edge y selecciona **Instalar aplicación** en el menú del navegador.
- En iPhone o iPad, abre el sitio en Safari, pulsa **Compartir** y selecciona **Añadir a pantalla de inicio**.
- La instalación del service worker ocurre en la compilación de producción; en desarrollo (`npm run dev`) no se activa.

## Publicar en Vercel paso a paso

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. En el panel, pulsa **Add New → Project**.
4. Busca el repositorio `tic-tac-toe` y pulsa **Import**. Si no aparece, concede a Vercel acceso al repositorio desde la configuración de GitHub.
5. En la configuración del proyecto, selecciona **Vite** como framework si no se detecta automáticamente. Usa:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Pulsa **Deploy** y espera a que termine la compilación.
7. Abre el dominio que Vercel muestra al finalizar. Desde ahí podrás instalar la PWA.

Vercel volverá a desplegar la aplicación automáticamente cuando subas cambios a la rama conectada de GitHub.

## Autor

Hecho por [cesarchamal](https://github.com/cesarchamal).

