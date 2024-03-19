# Vue Email List

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

## Svolgimento

1. Inserisco la proprietà `apiUrl` contenente l'url dal quale prenderò l'API
2. con un ciclo richiamo il metodo `get()` per effettuare la chiamata API 10 volte
3. se la risposta è positiva stampo l'email
