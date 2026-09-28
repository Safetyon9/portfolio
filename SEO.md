# SEO del portfolio

Il sito resta statico e viene pubblicato su GitHub Pages. Angular genera la home
completa durante `npm run build`; non occorre un server Node in produzione.

## Verifica prima della pubblicazione

```sh
npm run build
node scripts/check-seo.mjs
npm test -- --watch=false
```

Il controllo SEO legge l'HTML generato senza eseguire JavaScript e verifica che
contenga nome, sezioni, progetti, contatti, metadati e dati strutturati.

## Dopo la pubblicazione

1. Controllare che `https://vincenzorusso.me/`, `/robots.txt` e `/sitemap.xml`
   siano raggiungibili. Il workflow pubblica `dist/portfolio/browser`.
2. Aggiungere la proprietà dominio `vincenzorusso.me` in Google Search Console
   e verificarla con il record DNS TXT fornito da Google.
3. Inviare `https://vincenzorusso.me/sitemap.xml` nella sezione Sitemap.
4. Usare Controllo URL sulla home, eseguire il test dell'URL pubblicato e
   richiedere l'indicizzazione. Monitorare poi indicizzazione e rendimento;
   l'invio non garantisce l'inclusione né un posizionamento specifico.
5. Inserire il link al portfolio nei profili LinkedIn e GitHub.
6. Verificare la versione mobile con PageSpeed Insights. Se le immagini pesano
   troppo, esportarle in WebP/AVIF e aggiornare i percorsi dei progetti.

## Manutenzione

- Titolo, descrizione, condivisioni social e dati strutturati: `src/index.html`.
- URL indicizzabili: `public/sitemap.xml`; le sezioni con `#` non sono pagine separate.
- Regole di scansione: `public/robots.txt`.
- Dominio: mantenere coerenti CNAME, canonical, sitemap, robots e dati strutturati.
- La lingua resta inglese perché i contenuti sono in inglese. Una futura versione
  italiana dovrà avere contenuti tradotti, URL propri e collegamenti hreflang.
- Come rifinitura, aggiungere un'immagine social dedicata e i relativi metadati
  `og:image` e `twitter:image`: al momento le anteprime hanno titolo e descrizione.
- Quando un progetto è completo, arricchirlo con problemi risolti, responsabilità
  e risultati verificabili. Evitare ripetizioni artificiali di parole chiave.

Riferimenti: [Google: SEO JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
e [Angular: prerendering](https://angular.dev/guide/ssr).
