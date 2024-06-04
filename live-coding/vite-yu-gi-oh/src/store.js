import { reactive } from 'vue';

export const store = reactive({
  data: [], //risultati delle cards
  meta: {}, //risultato con info relative alla paginazione

  apiInfo: {
    url: 'https://db.ygoprodeck.com/api/v7/',
    resultNumber: 10,
    offsetNumber: 0,
    endpoints: {
      cards: 'cardinfo.php',
      archetypes: 'archetypes.php',
      checkDBVersion: 'checkDBVer.php',
    },
  },
});
