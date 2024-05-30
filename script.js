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
            }],
            newTaskContent: '',
        }
    },
    // Con "oggettoIndex" ho fatto in modo che entrasse dentro i vari oggetti  dell'array
    methods: {
        onOffClick: function(oggettoIndex) {
            this.toDoList[oggettoIndex].done = !this.toDoList[oggettoIndex].done
        },
        addTask: function (passaggio) {
                const newTask = {
                    text: passaggio.trim(),
                    done: false,
                }
                this.toDoList.push(newTask);
                this.clearNewTaskInput();
            },
        clearNewTaskInput: function() {
            this.newTaskContent = '';
        },
        removeTask: function(oggettoIndex) {
            this.toDoList.splice(oggettoIndex, 1)
        }
    },
}).mount('#app');