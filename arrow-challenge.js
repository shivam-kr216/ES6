const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },
    {
        text: 'Clean yard',
        completed: false
    }, 
    {
        text: 'Film course',
        completed: false
    }] ,

    getTasksToDo(){ 
        const filteredTask = this.tasks.filter((task) => {
            return task.completed === false
        }) 
        
        return filteredTask;
    }
}
    
    console.log(tasks.getTasksToDo())