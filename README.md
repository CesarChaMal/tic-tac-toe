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

## Publicar en Vercel

Importa el repositorio de GitHub en Vercel. El proyecto usa Vite; si necesitas configurar los valores manualmente:

- Comando de compilación: `npm run build`
- Carpeta de salida: `dist`
