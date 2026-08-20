# Personal interface

Sito statico pronto per GitHub Pages. Non richiede build o dipendenze: è sufficiente pubblicare il repository come sito statico.

## Struttura

Il sito usa script JavaScript modulari, isolati sotto un unico namespace, e non richiede un processo di build:

- `js/app.js` inizializza tema, terminale, tab ed eventi;
- `js/commands.js` implementa i comandi e i renderer delle sezioni;
- `js/content.js` contiene i testi estesi e i diagrammi;
- `js/data.js` contiene profilo, teaching, tesi e link delle pubblicazioni;
- `js/news.js` contiene le news;
- `js/publications.js` carica e visualizza il database bibliografico;
- `js/news.js` e `publications.json` sono le fonti dati per news e pubblicazioni;
- `styles.css` contiene layout e interfaccia, mentre `css/components.css` raccoglie gli stili delle sezioni di contenuto.

La pagina, l'interfaccia e le news possono essere aperte direttamente tramite `file://`. Per caricare anche le pubblicazioni dal file JSON durante lo sviluppo locale, servire la cartella con un server HTTP statico.

## Pubblicazione

Su GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.
