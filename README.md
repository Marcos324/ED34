# Evaluaciones psicológicas orientadas al autismo

Sitio web informativo para un servicio de evaluaciones psicológicas en el contexto del autismo. Diseño tranquilo, accesible y responsive.

## Contenido del sitio

- **Inicio**: presentación del servicio
- **Qué son**: explicación de las evaluaciones en el contexto del autismo
- **Proceso**: pasos desde el primer contacto hasta el informe
- **A quién está dirigido**: niñas/niños, adolescentes, adultos
- **Equipo**: espacio para describir al profesional o equipo (texto placeholder)
- **Contacto**: formulario (Netlify Forms), email, teléfono, WhatsApp y botón flotante
- **Preguntas frecuentes**: acordeón con 5 preguntas
- **Recursos**: enlaces a información seria sobre autismo
- **Gracias**: página mostrada tras enviar el formulario (si configurás redirección en Netlify)
- **Aviso importante**: disclaimer sobre carácter orientativo y confidencialidad

## Cómo ejecutar en local

1. Cloná o descargá esta carpeta.
2. Abrí `index.html` en el navegador (doble clic o arrastrando el archivo).
3. O usá un servidor local, por ejemplo:
   - **Node**: `npx serve .` (instala y ejecuta [serve](https://www.npmjs.com/package/serve)).
   - **Python 3**: `python -m http.server 8000` y entrá a `http://localhost:8000`.

## Estructura del proyecto

```
dw45/
├── index.html      # Página principal (single page)
├── gracias.html    # Página de agradecimiento tras enviar el formulario
├── favicon.svg     # Ícono del sitio
├── css/
│   └── styles.css  # Estilos
├── js/
│   └── main.js     # Menú móvil, FAQ acordeón, estado del formulario
├── DEPLOY.md       # Instrucciones GitHub + Netlify
└── README.md
```

## Qué personalizar

- **Datos de contacto**: en `index.html`, reemplazá `contacto@ejemplo.com`, el teléfono y los enlaces de WhatsApp (formulario + botón flotante) por los reales. El botón flotante usa `href="https://wa.me/5491112345678?text=..."` — cambiá el número.
- **Equipo**: en "Quién realiza las evaluaciones", reemplazá el texto entre corchetes por el nombre, título y descripción del profesional o equipo.
- **Consultorio**: reemplazá `[Dirección, ciudad — opcional]` en Contacto si tenés dirección física.
- **Logo**: si tenés un logo, reemplazá el texto "Evaluaciones Autismo" en el header por una imagen (`<img>` con `alt` descriptivo).
- **Formulario**: ya está conectado a **Netlify Forms**. Los envíos aparecen en Netlify → Site → Forms. Para que después de enviar redirija a una página de gracias: en Netlify → Forms → "Form handling" → "Redirect to" → `/gracias.html`.
- **Redes sociales**: si tu sitio no es `https://ed34.netlify.app`, cambiá en `index.html` las meta `og:url` y `og:image` por tu URL real. Para que al compartir el enlace se vea una imagen, subí una imagen `og-image.png` (1200×630 px) a la raíz del proyecto.

## Despliegue

Podés subir la carpeta tal cual a cualquier hosting estático:

- **Netlify**: arrastrá la carpeta al panel o conectá un repositorio Git.
- **Vercel**: importá el proyecto y usá la raíz donde está `index.html`.
- **GitHub Pages**: subí los archivos a un repo y activá Pages en la rama que corresponda.

No hace falta compilar nada: es HTML, CSS y JS puro.

## Accesibilidad

- Enlace "Ir al contenido principal" para usuarios de teclado.
- Estructura semántica (header, main, section, nav, footer).
- Atributos ARIA en menú móvil y preguntas frecuentes.
- Contraste y enfoque visible (`:focus-visible`).
- Sin animaciones bruscas ni parpadeos.

## Licencia

Uso según tu proyecto. Recordá mantener el aviso legal y el tono respetuoso con el autismo si reutilizás o modificás el contenido.
