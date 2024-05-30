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
    methods: {
        onOffClick: function(oggettoIndex) {
            this.toDoList[oggettoIndex].done = !this.toDoList[oggettoIndex].done
        }
    }
}).mount('#app')