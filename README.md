# Plataforma de Carnetización Digital – Consulta de Afiliado

React + Vite (JavaScript) + Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Estructura (feature-driven)

```
src/
├── main.jsx               # punto de entrada
├── index.css
├── app/App.jsx            # composición de la página
├── assets/images/
├── shared/components/     # Navbar, Footer, CmdLogo
└── features/
    ├── affiliate/         # búsqueda y datos del afiliado (hook + mock)
    ├── carnet/            # carnet digital, QR, descarga PNG
    └── benefits/          # beneficios comerciales (mock)
```

Cada feature expone su API pública en `index.js`; importa desde ahí y no desde sus archivos internos.
