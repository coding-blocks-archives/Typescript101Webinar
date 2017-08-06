
function echo<T> (arg: T): T {
  return arg
}

let x: number;
let y: string;

x = echo<number>(10)

y = echo<string>('10')

class ArrayList<T> {
  private arr: T[]
  public get (): T[] {
    return this.arr
  }
  public add (item: T) {
    this.arr.push(item)
  }
  constructor() {
    this.arr = []
  }
}

let stringArray: ArrayList<string> = new ArrayList<string>();

stringArray.add('some data')