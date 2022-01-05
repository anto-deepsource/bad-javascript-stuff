import path from "path";
import fs from "fs";
import * as prettier from 'prettier'

const x: string = "xx"

const a: string = "q"

const z = 1
console.log(z + x)
console.log(a + x)

console.log(z + x)
console.log(a + x)

const b = { a: 1 }
console.log(`Some ${b}`)
console.log(`Some ${b}`)

console.log(x + prettier.format("a"))
console.log(` some ${prettier.format("a")}`)

console.log(x + prettier.format("a"))
console.log(` some ${prettier.format("a")}`)

const unused_variable = 123;

class Foo {
  constructor(x) {
    this.x = x;
  }
}

path.join("a", "b");
fs.readFile("xx");

// unused object
new Foo(10);

function foo() {
  "use strict";
  return false;
}

const always_false = foo();
const very_bad_variable = ">:D";
let non_const_and_unused = 'x' && 'y'
let x1 = 1;
let x2 = 2;
