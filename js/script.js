const {createApp} = Vue;

createApp({
    data(){
        return{
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            output: ''

        }
    },

    methods:{
    }
}).mount('#app');