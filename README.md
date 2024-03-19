# Vue Email List

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

## Svolgimento

1. Inserisco la proprietà `apiUrl` contenente l' endpoint della chiamata
2. creo una funzione `getApis()` che effettua un ciclo di **chiamate API**, restituendomi le email, o l'errore con esito negativo
3. con un `v-for` nel **list items** recupero l'elemento e l'ìndice e stampo l'elemento dell'array in base all'indice
