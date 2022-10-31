function ToDoList () {
    this.tasks = {};
    this.currentId = 0
}

function Task (taskName, taskObjective, date) {
    this.taskName = taskName;
    this.taskObjective = taskObjective;
    this.date = date;
}

Task.prototype.checkOff = function (doneOrNot) {
    this.done = doneOrNot
}

ToDoList.prototype.addTask = function (taskObject) {
taskObject.id = this.assignId();
this.tasks[taskObject.id] = taskObject;
}

ToDoList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

ToDoList.prototype.findTask = function(id) {
    if (this.tasks[id] !== undefined) {
        return this.destinations[id];
    } else {
        return false;
    }
}

ToDoList.prototype.deleteTask = function (id) {
    if (this.tasks[id] === undefined) {
        return false;
} 
delete this.tasks[id];
return true;
}

let week4 = new ToDoList();
let cleanGutters = new Task("Clean the gutters", "no more leaves in gutters", "this week");
week4.addTask(cleanGutters);

cleanGutters.checkOff(false);
console.log("cleanGutters" , cleanGutters);
console.log("done?", cleanGutters.done)