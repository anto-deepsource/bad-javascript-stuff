import * as prettier from 'prettier'

const x: string = "xx"

const a: string = "q"

const z = 1
console.log(z + x)
console.log(a + x)

const b = { a: 1 }
console.log(`Some ${b}`)

console.log(x + prettier.format("a"))
console.log(` some ${prettier.format("a")}`)