enum TodoStatus {
  'fresh',
  'working',
  'completed',
  'abandoned'
}

class Todo {
  task: string
  status: TodoStatus

  constructor(task: string, status: TodoStatus) {
    this.task = task;
    this.status = status
  }
}

let todo: Todo = new Todo('Take this webinar', TodoStatus.working)
console.log(todo.status);