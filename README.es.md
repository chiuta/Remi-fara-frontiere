# Remi fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · **Español** · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versión:** 1.2.3 · **Última actualización:** 2026-10-22

Idiomas de la interfaz: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Un atlas del rummy con 19 variantes jugables contra una IA, en un único archivo HTML.

**En línea:** https://chiuta.github.io/Remi-fara-frontiere/

![Captura de pantalla](screenshot.es.png)

## Qué es

Remi fără frontiere (subtítulo en la aplicación: «Atlas · 19 variantes jugables · Atlantykron · Centrul StrING») es un atlas de los juegos de la familia del rummy, en el que cada variante se puede jugar contra un oponente de IA. La interfaz tiene 8 idiomas (RO, EN, FR, IT, ES, PT, DE, HU), con fichas y cartas grandes.

## Funciones

- La pestaña **Atlas (19)**: una ficha por cada variante, con origen, descripción, etiquetas y el botón «▶ Jugar».
- La pestaña **Jugar**: selector de variante, agrupado por tipos: *Con mesa común*, *Knock / Gin*, *Contrato*, *Fases*, *Canasta*, *Fichas*.
- Las 19 variantes: Rummy rumano, Scala 40, Kalooki, Rummy 500, Dummy Rummy, Carousel Rummy, Gin Rummy, Oklahoma Gin, Hollywood Gin, Conquian, Contract Rummy, Shanghai Rummy, Phase 10, Canasta clásica, Canasta americana, Canasta boliviana, Okey (simplificado), Rummikub (simplificado), Mahjong (simplificado).
- Tablero de juego con mazo, pila de descartes, combinaciones sobre la mesa, mano del jugador, puntuaciones (Tú / IA), mensajes de estado y texto de ayuda con las reglas de la variante actual.
- Elementos específicos: el contrato actual (Contract/Shanghai), las fases (Phase 10), el indicador de Okey, los umbrales de knock / gin.
- Estadísticas locales por variante (victorias/derrotas), mostradas en el selector de variantes, con el botón «Borrar estadísticas».
- Juego contra la IA; pantalla final con «▶ Jugar de nuevo» y «✕ Cerrar».
- Orientación contextual en tu turno: tras cada selección de cartas, el panel de ayuda indica qué puedes hacer (descartar, ampliar, si la selección forma una combinación); el estado de la selección también se expone a los lectores de pantalla (`aria-pressed`).
- Los elementos interactivos principales (mazo, descartes) son accesibles también con el teclado (Intro / Espacio).

## Manual de uso

1. Abre la página; en la pestaña «📚 Atlas (19)» lee las fichas de las variantes.
2. Pulsa «▶ Jugar» en una ficha, o pasa a la pestaña «🎮 Jugar» y elige la variante en «Elige una variante para jugar contra la IA».
3. En tu turno (estado mostrado: «Roba»): roba una carta del mazo o de la pila de descartes.
4. Después (estado «Acción»): usa los botones de acción mostrados bajo el tablero (p. ej. bajar combinaciones, hacer knock o descartar una carta, según la variante) y lee la orientación del área de ayuda.
5. Sigue la puntuación en los paneles «Tú» e «IA»; al final elige «▶ Jugar de nuevo» o «✕ Cerrar».
6. «← Selección» te devuelve a la elección de variante.

## Privacidad y red

- El único almacenamiento local: el contador de victorias/derrotas por variante en `localStorage` (clave `remi-ff:stat:v1`), en tu dispositivo; sin IndexedDB ni cookies. La aplicación no hace llamadas de red (CSP con `connect-src 'self'`, script permitido solo por hash); las fuentes están incrustadas en el archivo.
- El enlace «Coffee» solo se abre al hacer clic.
- Sin analítica.

## Ejecución local / sin conexión

Descarga `index.html` y ábrelo en un navegador; funciona por completo sin internet.

## Licencia

Licencia MIT — consulta el archivo LICENSE

## Auditoría

2026-10-10: verificado que no hay solicitudes de red ni almacenamiento (en esa fecha; desde la ronda 6 solo existe el contador local de estadísticas); el adversario «IA» es un algoritmo heurístico incluido en el archivo (sin modelo de ML). Los nombres «Rummikub» y «Phase 10» son marcas de terceros (usadas aquí como nombres de variantes de juego); las reglas del Mahjong están simplificadas. Corregidos el contraste y la semántica de navegación.

## Marcas y nombres comerciales

Los nombres «Rummikub», «Phase 10», «Canasta», «Okey», etc. son nombres comerciales o marcas de sus titulares; aquí se usan de forma descriptiva, como nombres de variantes de juego, sin afiliación ni aprobación de estos. La aplicación no incluye materiales gráficos ni reglas oficiales de productos comerciales (las reglas son aproximaciones simplificadas; véase «Auditoría»).

## Historial / Changelog

### 1.2.3 — 2026-10-22

mejoras para móvil y accesibilidad: texto de al menos 12 px y áreas táctiles de al menos 24 px. restablecer las estadísticas pide confirmación en el diálogo integrado del kit (traducido a 8 idiomas) en lugar del `confirm()` bloqueante; foco de teclado visible; prueba `tests/r9-confirm.test.mjs`.

### 1.1.0 — 2026-10-14
- Copia de seguridad y etiquetado de datos (fff-kit).

### 1.0.0 — 2026-10-12
- La versión y la fecha de la última actualización se muestran en la aplicación (al final del Atlas).

### 11 de octubre de 2026 (ronda 7)
- Mejorado: el mensaje de estado se quedaba en «Elige cartas y baja combinaciones…»; ahora el área de ayuda reacciona a la selección (descarta / amplía / combinación válida o qué falta). La selección de cartas tiene `aria-pressed`, y el área de ayuda es `aria-live`.
- Corregido: el valor de la esquina inferior de las cartas rojas/negras tenía texto claro sobre fondo crema (contraste insuficiente, detectado por axe-core durante el juego).

### 11 de octubre de 2026 (ronda 6)
- Añadido: estadísticas locales (victorias/derrotas por variante) con restablecimiento.
- Seguridad: CSP con `script-src` basado en hash en lugar de `'unsafe-inline'`.

### 11 de octubre de 2026
- Corregido: Okey y Rummikub aparecen ahora etiquetados «(simplificado)» en la aplicación, y los textos de las reglas ya no prometen funciones no implementadas (reorganización de la mesa, cierre 14+1, mano de Mahjong 4+1): se indica la regla original y lo que está realmente implementado (la misma lista que la nota «Implementación simplificada»). Lo mismo para Carousel Rummy.
- Corregido: accesibilidad: `<main>`, título h1, orden correcto de los títulos, mano del jugador enfocable con el teclado, ventana final con rol dialog; 0 infracciones de axe-core a 1280 y 360 px, también en la pantalla de juego.
- Verificado: las 19 variantes arrancan sin errores de JS.
- No implementado (se mantiene): un motor de fichas con mesa reorganizable para Rummikub/Okey y la condición real de victoria del Mahjong.

## Autor

Alexio — Alexandru-Ionuț Chiuță. Contacto: alexio@trom.tf. La aplicación menciona Atlantykron y Centrul StrING en el subtítulo.

## Resumen

Un atlas monoarchivo en lengua rumana de 19 juegos de la familia del rummy (rummy rumano, Gin Rummy, Canasta, Okey, Rummikub, Phase 10, Mahjong simplificado y más), cada uno jugable contra un oponente de IA. Sin almacenamiento y sin solicitudes de red. Licencia MIT.
