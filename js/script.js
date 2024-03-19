const {createApp} = Vue;

createApp({
    data(){
        return{
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            arrayEmails: []
        }
    },

    methods:{
        getApis(){
            // ciclo la richiesta API 10 volte
            for(let i = 0; i < 10; i++){
                axios.get(this.apiUrl)
                // se la chiamata va a buon fine (status 200)
                // pusho l'email ricevuta dentro l'array
                .then(res => {
                    this.arrayEmails.push(res.data.response);
                    console.log(this.arrayEmails);
                })
                //se la chiamata non va a buon fine stampo ERRORE!
                .catch(err => {
                    err = 'ERRORE!';
                    this.arrayEmails.push(err);
                })
            }
        },

        

    },

    mounted(){
        this.getApis();
    }
}).mount('#app');