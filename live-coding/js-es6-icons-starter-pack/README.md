# JS Icons

Realizzare un sistema di rappresentazione icone.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.

Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?

Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.

### Milestone 0

Come possiamo inserire un'icona nella pagina se la sua sintassi è (partendo dalla struttura dati) quella visualizzata qui sotto?

```HTML

 <i class="family prefix-name"></i>

```

### Milestone 1

Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

### Milestone 2

Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

### Milestone 3

Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

### BONUS

Popolare le options della select della milestone 3 dinamicamente.

### Consigli del giorno

Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.

## Font della pagina

HTML:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Acme&family=Rubik&display=swap"
  rel="stylesheet"
/>
```

CSS:

```css
body {
  font-family: 'Rubik', sans-serif;
}
```

## Struttura dati di riferimento

```javascript
[
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
];
```
