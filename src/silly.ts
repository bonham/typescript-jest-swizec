import { myname } from "./mymod"

export function sillyFunction(): string {
  var name :string = myname()
  return name
}

let x = sillyFunction()
console.log("hi")
console.log(x)