var TodoStatus;
(function (TodoStatus) {
    TodoStatus["fresh"] = "fresh";
    TodoStatus["working"] = "working";
    TodoStatus["completed"] = "completed";
    TodoStatus["abandoned"] = "abandoned";
})(TodoStatus || (TodoStatus = {}));
var Todo = (function () {
    function Todo(task, status) {
        this.task = task;
        this.status = status;
    }
    return Todo;
}());
var todo = new Todo('Take this webinar', TodoStatus.working);
console.log(todo.status);
