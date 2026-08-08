# Portafolio — Francisco Joel Cruz Fernández

Portafolio personal construido con **React + JavaScript + Vite + React
Router**, migrado desde el sitio original en HTML/CSS
([macondo-portfolio](https://github.com/Fran-cruz/macondo-portfolio)) que fue
la base del diseño del Primer Parcial.

## Tecnologías

- React 19
- Vite
- React Router (rutas de detalle de proyecto en `/proyectos/:slug`)
- CSS Modules (sin frameworks de CSS externos)

## Scripts

```bash
npm install
npm run dev       # entorno de desarrollo
npm run build     # build de producción en /dist
npm run preview   # previsualizar el build
```

## Estructura

```
src/
  data/        # contenido real: proyectos, skills, experiencia, redes, about
  components/
    layout/    # Header, Footer, Layout (con menú hamburguesa responsive)
    ui/        # componentes reutilizables (Card, Tag, Button, ProjectCard, ...)
  sections/    # secciones de la Home (Hero, About, Skills, Projects, ...)
  pages/       # HomePage, ProjectDetailPage, NotFoundPage
```

## Contenido

Todos los proyectos mostrados son reales, con su tipo de contribución
(individual/grupal) y el aporte específico de cada uno detallado en
`src/data/projects.js` y en la página de detalle de cada proyecto
(`/proyectos/:slug`).

Ver [`PLAN.md`](./PLAN.md) para el detalle completo de decisiones de
contenido y diseño.

## Código fuente / commits

https://github.com/Fran-cruz
