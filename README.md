# Evaluaciones psicológicas orientadas al autismo

Sitio web informativo para un servicio de evaluaciones psicológicas en el contexto del autismo. Diseño tranquilo, accesible y responsive.

## Contenido del sitio

- **Inicio**: presentación del servicio
- **Qué son**: explicación de las evaluaciones en el contexto del autismo
- **Proceso**: pasos desde el primer contacto hasta el informe
- **A quién está dirigido**: niñas/niños, adolescentes, adultos
- **Equipo**: espacio para describir al profesional o equipo (texto placeholder)
- **Contacto**: formulario y datos de email, teléfono y WhatsApp (reemplazar por datos reales)
- **Preguntas frecuentes**: acordeón con 3 preguntas
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
├── css/
│   └── styles.css  # Estilos
├── js/
│   └── main.js     # Menú móvil, FAQ acordeón, formulario
└── README.md
```

## Qué personalizar

- **Datos de contacto**: en la sección Contacto, reemplazá `contacto@ejemplo.com`, el teléfono y el enlace de WhatsApp por los reales.
- **Equipo**: en la sección "Quién realiza las evaluaciones", reemplazá el texto entre corchetes por el nombre, título y descripción del profesional o equipo.
- **Logo**: si tenés un logo, podés reemplazar el texto "Evaluaciones Autismo" en el header por una imagen (`<img>` con `alt` descriptivo).
- **Formulario**: el envío está simulado en JavaScript. Para que envíe de verdad, conectá el `form` a tu backend o a un servicio (por ejemplo Formspree, Netlify Forms, etc.).

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
