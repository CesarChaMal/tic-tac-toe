# Tic-Tac-Toe

A two-player Tic-Tac-Toe game built with React and Vite.

## Requirements

- Node.js and npm

## Install and run

From the project directory, run:

```bash
npm install
npm run dev
```

Open the URL printed by Vite in your browser (usually `http://localhost:5173/`).

## How to play

- Two players take turns. X goes first, followed by O.
- Select an empty square to place your mark.
- Get three marks in a horizontal, vertical, or diagonal line to win.
- If all squares are filled without a winner, the game is a draw.
- Select **New game** to start over.

## Production build

```bash
npm run build
```

Vite writes the production files to `dist/`. To preview the build locally:

```bash
npm run preview
```

## Install as an app (PWA)

You can install the app from a supported browser. After your first visit, it caches the interface so you can open it offline.

- On Android or desktop, open the deployed site in Chrome or Edge and select **Install app** from the browser menu.
- On iPhone or iPad, open the site in Safari, tap **Share**, and select **Add to Home Screen**.
- The service worker is enabled in production builds, not during development (`npm run dev`).

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Sign in to [vercel.com](https://vercel.com) with your GitHub account.
3. Select **Add New → Project**.
4. Find the `tic-tac-toe` repository and select **Import**. If it does not appear, grant Vercel access to the repository in your GitHub settings.
5. Select **Vite** as the framework if Vercel does not detect it automatically. Use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Select **Deploy** and wait for the build to finish.
7. Open the domain Vercel provides. You can install the PWA from there.

Vercel automatically redeploys the app when you push changes to the connected GitHub branch.

## Author

Made by [cesarchamal](https://github.com/cesarchamal).

