/*
    STEPS:
        Milestone 1
            1. Ricreare la grafica dell'app in html/css (o bootstrap)
            2. Aggiunta di tutti i contatti in maniera statica nella lsta
            3. Aggiunta dei messaggi nel main (come nella foto esempio)
                3A. Assegnazione delle classi sent o received ai messaggi, che regoleranno il loro comportamento nello schermo
            4. Integrazione di vuejs
            5. Aggiunta direttiva v-for per visualizzare dinamicamente i contatti nella lista
        Milestone 2
            1. Usare la direttiva v-for per visualizzare tutti i messaggi relativi ad un contatto nello schermo
            2. Aggiungere un evento click ad ogni contatto per visualizzare i suoi messaggi a schermo
        Milestone 3
            1. Abilitare l'input text con v-model per scrivere i messaggi
            2. Aggiungere all'input l'evento keyup.enter per inviare i messaggi
            3. Intercettare l'invio dei messaggi per poter poi rendere una risposta 1 secondo dopo (timing function)
        Milestone 4
            1. Abilitare l'input nell'aside con v-model per cercare i contatti
            2. Verranno visualizzati solo i contatti che contengono i caratteri digitati (funzione includes?)
*/
console.log("Collegamento javascript ok");

const { createApp } = Vue;

createApp({
    data () {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                    },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                    },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ],
            currentContact: 0,
            newMessage: {
                date: '10/01/2020 15:51:00',
                message: '',
                status: 'sent'
            },
            replyMessage: {
                date: '10/01/2020 15:51:00',
                message: 'Ok!',
                status: 'received'
            }
        }
    },
    methods: {
        addNewMessage: function() {
            this.contacts[this.currentContact].messages.push(this.newMessage);
            this.newMessage = {date: '10/01/2020 15:51:00', message: '', status: 'sent'};

            setTimeout(this.answerMessage, 1000);
        },
        answerMessage: function() {
            this.contacts[this.currentContact].messages.push(this.replyMessage);
        }
    },
    // mounted () {
        // setTimeout(this.answerMessage, 1000);
    // }
}).mount('#app');