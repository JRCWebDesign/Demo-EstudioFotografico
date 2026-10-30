# Revisión de diseño — dirección cinematográfica

final result: passed

## Referencia y alcance

- Fuente visual: `.codex-remote-attachments/01a18dbe-16d9-7d22-bbae-5954ddd74abb/e3b141c9-97f9-4e40-8425-750b354784d1/1-1000309707.jpg` (1280 × 1280 px).
- Objetivo: adaptar su dirección artística a un negocio de fotografía y video; el usuario pidió «más así, más artístico pero un negocio», no una réplica literal del texto o la marca.
- Implementación: `demo-preview.png` (escritorio), `demo-full.png` (1425 × 6442 px de contenido), `demo-mobile.png` (375 × 8329 px de contenido).
- Viewports CSS: 1440 × 1000 y 390 × 844. La barra del navegador reserva 15 px para scroll. Capturas a densidad normal.
- Estado: portada inicial, todos los trabajos, primer servicio abierto. También se probaron los estados de servicios, filtros, ampliación y consulta.
- Comparación conjunta: `.design-qa/comparison.jpg`. Se retiró el marco externo fotografiado de la referencia y se normalizaron ambas vistas a 620 px de ancho, conservando proporción. No se atribuyen diferencias de longitud al contenido ni al marco de Pinterest.

## Superficies revisadas

- Tipografía: títulos condensados de afiche, etiquetas monoespaciadas y cuerpo sans serif. La referencia usa pequeños títulos decorativos; se interpreta con una tipografía más legible y frases comerciales. Diferencia intencional. Revisada la portada también a tamaño completo para comprobar lectura y saltos de línea.
- Composición: sujeto y cámara dominantes, menú superior compacto, columna lateral, información a la derecha y franja editorial inferior. Se conserva la dirección visual de negro y verde; las secciones comerciales y el archivo amplían deliberadamente el contenido del ejemplo. Galería asimétrica y servicios en índice en lugar de tarjetas repetidas.
- Color: fondo #0b100f, panel #101a17 y acento #7fc3a9. Texto principal claro y secundario #a0aaa4. Se sustituyó la paleta arena anterior por tonos de la referencia.
- Imágenes: portada original generada para el encuadre, imágenes ilustrativas locales y fotografía aérea generada. No se usa una captura de interfaz como web. Sin imágenes rotas. Las fotos con carga diferida se visitaron antes de la captura completa.
- Contenido: eventos, infantiles, drones e inmobiliaria siguen explícitos. Consulta asociada a cada servicio. No hay clientes, premios, testimonios ni teléfonos inventados. La condición de demo y las imágenes ilustrativas están identificadas.

## Historial de ajustes

1. P2: el gran pie tipográfico producía 2 px de desborde horizontal en escritorio. Se redujo de 21vw a 18vw; la captura revisada y la medición del documento confirman ausencia de desborde.
2. P2: el encuadre móvil dejaba parte excesiva del rostro fuera de la imagen. Se corrigió object-position a 25%; captura móvil posterior guardada. El texto se dispone debajo del rostro y la cámara.
3. Evidencia: la primera captura larga no había cargado dos imágenes diferidas fuera de pantalla. Se navegaron esas secciones y se volvió a capturar `demo-full.png`; imagen del estudio cargada y sin rutas rotas.

## Interacciones verificadas

- Menú móvil abre y cierra al elegir una sección.
- Los servicios despliegan descripción y actualizan imagen, pie y estado aria-expanded.
- Consulta de Drones e Infantiles precarga el servicio correcto.
- Filtro Aéreas muestra una imagen; galería ampliada abre y cierra con Escape.
- Formulario genera mensaje con nombre, servicio y descripción; no envía datos.
- Cero errores de consola en las pruebas finales. Sin desborde horizontal en escritorio y móvil.
- `npm run check` pasa.

## Diferencias aceptadas y seguimiento

- No se reproduce el texto ilegible de la referencia ni su sujeto exacto: se adapta para el negocio ficticio.
- P3: reemplazar las imágenes ilustrativas por trabajos del negocio real cuando haya una marca definida.
- WhatsApp permanece sin número hasta disponer de un contacto autorizado.
- Se mantiene el mecanismo de copia de mensaje verificado en la versión anterior; no se sobrescribe el portapapeles del usuario durante esta revisión.
