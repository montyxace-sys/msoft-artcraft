# MSoft ArtCraft Landing

Landing estática para MSoft, inspirada en ArtCraft, con configuración para Cloudflare Pages y paleta inspirada en Cloudflare.

## Estructura

- `index.html`: landings y catálogo de herramientas.
- `assets/css/styles.css`: estilos con variables de color.
- `assets/js/app.js`: animaciones e interacción ligera.
- `_headers`: cabeceras para Cloudflare Pages.
- `_redirects`: reglas de redirect.
- `wrangler.toml`: configuración de Cloudflare Pages.

## Local

Abre `index.html` en el navegador.

## Deploy en Cloudflare Pages

1. Sube este directorio a un repo o crea un proyecto de Pages.
2. Conecta el proyecto en Cloudflare Pages.
3. Build command: vacío.
4. Output directory: `/`.
5. Domain: `msoft.com.es` (entra si lo añades en Pages).

No requiere dependencias ni pasos adicionales.