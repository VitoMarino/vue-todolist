const {createApp} = Vue;

createApp({
    data() {
        return {
            toDoList : [{
                text: 'Patate',
                done: false
            }, 
            {
                text: 'Carote',
                done: true
            },
            {
                text: 'Formaggio',
                done: false
            }]
        }
    },
    // Con "oggettoIndex" ho fatto in modo che entrasse dentro i vari oggetti  dell'array
    methods: {
        onOffClick: function(oggettoIndex) {
            this.toDoList[oggettoIndex].done = !this.toDoList[oggettoIndex].done
        }
    }
}).mount('#app')