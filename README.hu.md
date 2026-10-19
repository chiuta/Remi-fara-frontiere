# Remi fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · **Magyar**

**Verzió:** 1.2.1 · **Utolsó frissítés:** 2026-10-19

A felület nyelvei: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Römi-atlasz 19, mesterséges intelligencia ellen játszható változattal, egyetlen HTML-fájlban.

**Élő verzió:** https://chiuta.github.io/Remi-fara-frontiere/

![Képernyőkép](screenshot.hu.png)

## Mi ez

A Remi fără frontiere (az alkalmazás alcíme: „Atlasz · 19 játszható változat · Atlantykron · Centrul StrING”) a römi családba tartozó játékok atlasza, amelyben minden változat játszható mesterséges intelligenciával vezérelt ellenfél ellen. A felület 8 nyelvű (RO, EN, FR, IT, ES, PT, DE, HU), nagy kövekkel és kártyákkal.

## Funkciók

- Az **Atlasz (19)** fül: minden változathoz egy adatlap, eredettel, leírással, címkékkel és a „▶ Játék” gombbal.
- A **Játék** fül: változatválasztó, típusok szerint csoportosítva: *Közös asztallal*, *Knock / Gin*, *Szerződéses*, *Fázisos*, *Canasta*, *Kőalapú*.
- A 19 változat: román römi, Scala 40, Kalooki, Rummy 500, Dummy Rummy, Carousel Rummy, Gin Rummy, Oklahoma Gin, Hollywood Gin, Conquian, Contract Rummy, Shanghai Rummy, Phase 10, klasszikus Canasta, amerikai Canasta, bolíviai Canasta, Okey (egyszerűsített), Rummikub (egyszerűsített), Mahjong (egyszerűsített).
- Játéktábla húzópaklival, dobott lapok halmával, az asztalra kirakott kombinációkkal, a játékos kezével, pontszámokkal (Te / MI), állapotüzenetekkel és súgószöveggel az aktuális változat szabályairól.
- Változatspecifikus elemek: az aktuális szerződés (Contract/Shanghai), a fázisok (Phase 10), az Okey-jelző, a knock / gin küszöbértékek.
- Helyi statisztikák változatonként (győzelmek/vereségek), a változatválasztóban megjelenítve, „Statisztikák törlése” gombbal.
- Játék a mesterséges intelligencia ellen; záróképernyő „▶ Új játék” és „✕ Bezárás” gombbal.
- Helyzetfüggő útmutatás a te köröd alatt: minden lapválasztás után a súgópanel megmondja, mit tehetsz (dobás, kiegészítés, alkot-e kombinációt a kijelölés); a kijelölés állapotát képernyőolvasók számára is elérhetővé teszi (`aria-pressed`).
- A fő interaktív elemek (húzópakli, dobott lapok) billentyűzettel is elérhetők (Enter / Szóköz).

## Használati útmutató

1. Nyisd meg az oldalt; a „📚 Atlasz (19)” fülön olvasd el a változatok adatlapjait.
2. Nyomd meg a „▶ Játék” gombot egy adatlapon, vagy lépj a „🎮 Játék” fülre, és válaszd ki a változatot a „Válassz egy változatot, amelyet az MI ellen játszol” listából.
3. A saját körödben (megjelenő állapot: „Húzz”): húzz egy lapot a húzópakliból vagy a dobott lapok halmából.
4. Ezután („Akció” állapot): használd a tábla alatt megjelenő műveletgombokat (pl. kombinációk lerakása, knock vagy egy lap eldobása, a változattól függően), és olvasd el az útmutatást a súgóterületen.
5. Kövesd a pontszámot a „Te” és az „MI” panelen; a végén válaszd az „▶ Új játék” vagy a „✕ Bezárás” lehetőséget.
6. A „← Kiválasztás” visszavisz a változat kiválasztásához.

## Adatvédelem és hálózat

- Az egyetlen helyi tárolás: a változatonkénti győzelem/vereség számláló a `localStorage`-ban (kulcs: `remi-ff:stat:v1`), az eszközödön; nincs IndexedDB és nincsenek sütik. Az alkalmazás nem kezdeményez hálózati hívást (CSP `connect-src 'self'` beállítással, a szkript csak hash alapján engedélyezett); a betűtípusok be vannak ágyazva a fájlba.
- A „Coffee” hivatkozás csak kattintásra nyílik meg.
- Nincs analitika.

## Helyi futtatás / offline

Töltsd le az `index.html` fájlt, és nyisd meg böngészőben; internet nélkül teljes mértékben működik.

## Licenc

MIT licenc — lásd a LICENSE fájlt

## Audit

2026-10-10: ellenőrizve, hogy nincsenek hálózati kérések vagy tárolás (az adott időpontban; a 6. kör óta csak a helyi statisztikaszámláló van); az „MI” ellenfél a fájlban lévő heurisztikus algoritmus (ML-modell nélkül). A „Rummikub” és a „Phase 10” név harmadik felek védjegye (itt játékváltozatok neveként használva); a Mahjong szabályai egyszerűsítettek. A kontraszt és a navigációs szemantika javítva.

## Védjegyek és kereskedelmi nevek

A „Rummikub”, „Phase 10”, „Canasta”, „Okey” stb. nevek tulajdonosaik kereskedelmi nevei vagy védjegyei; itt leíró jelleggel, játékváltozatok neveként szerepelnek, azok hovatartozása vagy jóváhagyása nélkül. Az alkalmazás nem tartalmaz kereskedelmi termékek grafikai anyagait vagy hivatalos szabályait (a szabályok egyszerűsített közelítések; lásd: „Audit”).

## Előzmények / Changelog

### 1.1.0 — 2026-10-14
- Adatmentés és adatcímkézés (fff-kit).

### 1.0.0 — 2026-10-12
- A verzió és az utolsó frissítés dátuma megjelenik az alkalmazásban (az Atlasz végén).

### 2026. október 11. (7. kör)
- Továbbfejlesztve: az állapotüzenet „Válassz lapokat és rakj ki kombinációkat…” maradt; most a súgóterület reagál a kijelölésre (dobás / kiegészítés / érvényes kombináció vagy ami hiányzik). A lapok kijelölése `aria-pressed` attribútumot kapott, a súgóterület pedig `aria-live`.
- Javítva: a piros/fekete lapok alsó sarkában lévő rangjelzés világos szöveg volt krémszínű háttéren (elégtelen kontraszt, az axe-core találta meg játék közben).

### 2026. október 11. (6. kör)
- Hozzáadva: helyi statisztikák (győzelmek/vereségek változatonként) visszaállítással.
- Biztonság: hash alapú `script-src` CSP az `'unsafe-inline'` helyett.

### 2026. október 11.
- Javítva: az Okey és a Rummikub most „(egyszerűsített)” címkét kapott az alkalmazásban, és a szabályszövegek már nem ígérnek meg nem valósított funkciókat (az asztal átrendezése, a 14+1 szerinti kimenés, a 4+1 Mahjong-kéz): az eredeti szabály és a ténylegesen megvalósított rész is fel van tüntetve (ugyanaz a lista, mint az „Egyszerűsített megvalósítás” megjegyzésben). Ugyanez vonatkozik a Carousel Rummyra.
- Javítva: akadálymentesség: `<main>`, h1 cím, helyes címsorrend, a játékos keze billentyűzettel fókuszálható, a záróablak dialog szerepet kapott; 0 axe-core szabálysértés 1280 és 360 px szélességen, a játékképernyőn is.
- Ellenőrizve: mind a 19 változat JS-hiba nélkül indul.
- Nem megvalósított (továbbra is): kőalapú motor átrendezhető asztallal a Rummikubhoz/Okeyhez, valamint a Mahjong valódi nyerési feltétele.

## Szerző

Alexio — Alexandru-Ionuț Chiuță. Kapcsolat: alexio@trom.tf. Az alkalmazás az alcímében megemlíti az Atlantykront és a Centrul StrING-et.

## Összefoglaló

Egyetlen fájlban lévő, román nyelvű atlasz a römi családba tartozó 19 játékról (román römi, Gin Rummy, Canasta, Okey, Rummikub, Phase 10, egyszerűsített Mahjong és mások), mindegyik játszható mesterséges intelligenciával vezérelt ellenfél ellen. Nincs tárolás és nincsenek hálózati kérések. MIT licenc.
