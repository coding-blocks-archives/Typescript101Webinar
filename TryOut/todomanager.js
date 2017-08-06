var Todo = (function () {
    function Todo(task, done) {
        this.task = task;
        this.done = done;
    }
    Todo.prototype.setTaskDone = function () {
        this.done = true;
    };
    return Todo;
}());
var todo = new Todo("Complete this lecture", false);
todo.setTaskDone();
