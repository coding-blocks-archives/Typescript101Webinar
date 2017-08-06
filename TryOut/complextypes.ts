
type NumOrStr = number | string

function greeter (arg: NumOrStr) {
  console.log("Hello " + arg);
}

greeter("Arnav")

greeter(10)
greeter(true)