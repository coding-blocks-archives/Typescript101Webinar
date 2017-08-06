class Todo {
  private task: string
  private done: boolean

  public setTaskDone(): void {
    this.done = true
  }

  constructor(task: string, done: boolean) {
    this.task = task;
    this.done = done
  }
}

let todo: Todo = new Todo("Complete this lecture", false)
todo.setTaskDone();
