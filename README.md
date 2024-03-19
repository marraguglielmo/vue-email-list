# Vue Email List

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

## Svolgimento

1. Inserisco la proprietà `apiUrl` contenente l'url dal quale prenderò l'API
2. creo una funzione `getApis()` che effettua la **chiamata API**, restituendomi l'email, o l'errore con esito negativo
3. con un ciclo richiamo la funzione `getApis()` 10 volte
4. se la risposta è positiva stampo l'email
