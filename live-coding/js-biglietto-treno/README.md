# Calcolo del biglietto del treno


Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

## Analisi e risoluzione del problema


- chiedo il numero di chilometri all'utente e lo salvo in una variabile (kmUser)
- trasformare (castare) kmUser in numero - Number(kmUser) -> +kmUser
- chiedo età passeggero e la salvo in una variabile (ageUser)
- trasformare (castare) ageUser in numero - parseInt(kmUser)

- setto una variabile underDiscount = 20
- setto una variabile overDiscount = 40

```
SE ageUser && kmUser //rispettano le condizioni

        calcolo del prezzo del biglietto

        il prezzo del biglietto è definito in base ai km (0.21 € al km)

        - salvo prezzo base dei km in una variabile (kmPrice)
        - calcolo il prezzo del biglietto (kmUser * kmPrice) - price

        - imposto variabile che definisce eta minorenni (ageUnder = 18)
        - imposto variabile che definisce eta maggiorenni (ageOver = 65)

        va applicato uno sconto del 20% per i minorenni
        va applicato uno sconto del 40% per gli over 65.

        - SE (ageUser < ageUnder)
        -- applico lo sconto del 20% -> price - (price / 100 * underDiscount)
        -- ELSE SE (ageUser > ageOver)
        --- applico lo sconto del 40% -> price - (price / 100 * overDiscount)

        - stampo prezzo del biglietto


        10.2187
        price.toFixed(2) -> '10.22' -> cast(numero)

ELSE
        - stampo un errore coerente
```

## TODO List
- Aggiungere tutta la validazione dei dati