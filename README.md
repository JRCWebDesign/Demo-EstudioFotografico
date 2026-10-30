# Luz · Estudio visual

Demo original de un negocio de fotografía y video: eventos, infantiles, drones e inmobiliaria. Marca y textos ilustrativos; no representa a AeroVista ni utiliza sus datos de contacto.

## Ver la demo

Requisito: Node.js 20 o posterior. No hay dependencias para instalar.

```sh
npm run dev
```

Abrí http://localhost:4173. Para detener el servidor, Ctrl+C. También podés abrir index.html directamente; el botón de copiar puede requerir selección manual en ese modo.

## Personalizar

- `index.html`: marca, textos, servicios y preguntas frecuentes. Las secciones están comentadas.
- `styles.css`: colores y medidas en `:root`; estilos móviles al final. Respeta la preferencia de movimiento reducido.
- `script.js`: fotografías, filtros, menú, ampliación y formulario. En `CONTACT.whatsapp`, agregá el número propio con código de país, solo dígitos. No se utiliza el teléfono de la referencia.
- `assets/`: fotos locales de referencia. Reemplazalas conservando los nombres o actualizá sus rutas y textos alternativos.

El formulario arma un mensaje y permite copiarlo. No almacena ni envía datos y no necesita backend. Si se configura un teléfono, muestra un enlace a WhatsApp con el mensaje preparado. Antes de publicar para un negocio real, revisá el texto de demo, los servicios, derechos de imágenes, datos de contacto y política de privacidad que corresponda. No hay video de muestra: esta versión usa fotografías y explica el servicio de video, sin botones de reproducción ficticios.

## Verificación

```sh
npm run check
```

Revisión manual: menú móvil, filtros de las seis categorías, ampliación de fotos, cierre con Escape, selección del servicio desde las tarjetas, validación del formulario, generación y copia del mensaje. Revisar en escritorio y celular.

## Git y hosting

Los adjuntos de conversación están excluidos por `.gitignore`. El destino preferido para el futuro repositorio es `https://github.com/JRCWebDesign/Demo-EstudioFotografico.git`. Verificá el remoto antes de subir; no se incluye ningún dato de autenticación.

Para hosting estático, subí únicamente `index.html`, `styles.css`, `script.js` y `assets/`. No hay compilación ni dependencias. `server.mjs` es solo para desarrollo local. GitHub Pages puede servir estos archivos desde la raíz de la rama que configures. No publiques `.codex-remote-attachments`.

## Imágenes de referencia

Fotos descargadas de Unsplash y una imagen aérea generada con ImageGen, detalladas junto al prompt en `assets/SOURCES.md`. No representan trabajos realizados por el estudio ficticio. Reemplazar por material autorizado del negocio al convertir la demo en un sitio comercial.
