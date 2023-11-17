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
            newTask: ""
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
            
            this.list.push({attività: this.newTask, completed: false})
        if (this.newTask == "") {
            this.list.pop({attività: this.newTask, completed: false})
        }
        this.newTask = ""
        
        }
    }
}).mount("#app")