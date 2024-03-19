# Vue Email List

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

### Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## Svolgimento

1. Inserisco la proprietà `apiUrl` contenente l' endpoint della chiamata
2. creo una funzione `getApis()` che effettua un ciclo di **chiamate API**, restituendomi le email, o l'errore con esito negativo
3. con un `v-for` nel **list items** ciclo le singole email nell'array e stampo l'elemento dell'array

## Svolgimento bonus

1. creo un contatore
1. ad ogni chiamata API incremento il contatore, quando sarà uguale a 10 stamperò le email
