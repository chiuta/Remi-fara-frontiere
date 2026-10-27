# Jurnal de modificări

## 2.0.1 — 2026-10-27 (anterior: v2.0.0)

Recenzie 2026-10-27.

### Implementat
- Atlas: Remi românesc marcat «★ varianta românească» (prima variantă) cu «reguli regionale de confirmat»; Rummikub marcat «remi pe tablă (denumire de confirmat)», în 8 limbi. Rummikub și Remi românesc existau deja ca variante jucabile.
- Test nou `tests/etichete-ro.test.mjs` (13 verificări).

### Neimplementat și de ce
- Reguli românești specifice pentru «remi pe tablă»: nicio sursă verificabilă găsită; nu au fost inventate. Rearanjarea mesei în Rummikub rămâne neimplementată (ca înainte).
- AI cu niveluri de dificultate: neimplementat în această rundă (necesită calibrare și teste dedicate pe motorul jocului).
- Statistici comune între jocuri: neimplementat (ar cere un spațiu de stocare partajat între aplicații separate, contrar izolării actuale).
- Mod multiplayer local unificat între jocuri: **planificat**, NU acum; jocurile rămân separate.
