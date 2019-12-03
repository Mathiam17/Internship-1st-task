new Vue({
    el: "#Main-Box",
    data: {
        Tasks: [
            {text: 'Tests', done: false, id: Date.now()}
        ]
    },
    methods: {
        addTask({target}) {
            this.Tasks.push({text: target.value, done:false, id: Date.now()})
            target.value = '' 
        },
        removeTask(id) {
            this.Tasks = this.Tasks.filter(Task => Task.id !== id)
        }
    }
})