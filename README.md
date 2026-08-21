# Personal interface

Sito statico pronto per GitHub Pages. Non richiede build o dipendenze: è sufficiente pubblicare il repository come sito statico.

## Struttura

Il sito usa script JavaScript modulari, isolati sotto un unico namespace, e non richiede un processo di build:

- `js/app.js` inizializza tema, terminale, tab ed eventi;
- `js/commands.js` implementa i comandi e i renderer delle sezioni;
- `js/content.js` contiene i testi estesi e i diagrammi;
- `js/data.js` contiene profilo, teaching, tesi e link delle pubblicazioni;
- `js/news.js` contiene le news;
- `js/posters.js` contiene il catalogo dei poster e i relativi metadati;
- `js/publications.js` visualizza il database bibliografico;
- `publications-data.js` è la fonte dati delle pubblicazioni;
- `assets/posters/` contiene le anteprime JPEG ottimizzate, mentre `posters/` conserva i PDF originali;
- `styles.css` contiene layout e interfaccia, mentre `css/components.css` raccoglie gli stili delle sezioni di contenuto.

L'intero sito può essere aperto direttamente tramite `file://` oppure servito con un server HTTP statico.

## Pubblicazione

Su GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.
