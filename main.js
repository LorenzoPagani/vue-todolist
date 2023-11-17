const {createApp} = Vue;

createApp({
    data(){
        return {
            list: [
                {
                    attività: "fare la spesa",
                    completed: true
                },
                {
                    attività: "andare a correre",
                    completed: false
                },
                {
                    attività: "Lavorare",
                    completed: false
                },
                {
                    attività: "finire l'esercizio",
                    completed: false
                },
                {
                    attività: "ubriacarsi male",
                    completed: true
                },
            ],
            newTask: {
                attività: "ubriacarsi male",
                completed: false
            },
            clicked: false
        }
    },
    methods: {
        taskStatus(condition) {
            return (condition) ? "barred" : "";
        },
        removeTask(index) {
            this.list.splice(index, 1);
        },
        toggleCompletion(condition) {
            if (!condition) {
                condition = true;
                console.log(condition) 
            } else {
                condition = false
                console.log(condition)
            }
        },
        addTask() {
            this.list.push(this.newTask)
        }
    }
}).mount("#app")