import path from "path";
import fs from "fs";

const unused_variable = 123;

class Foo {
  constructor(x) {
    this.x = x;
  }
}

console.log("Hello, world!");

path.join("a", "b");
fs.readFile("xx");

// unused object
new Foo(10);

function foo() {
  "use strict";
  return false;
}

console.log("Hello, world!");

const always_false = foo();
const very_bad_variable = ">:D";
let non_const_and_unused = 'x' && 'y'
let x = 1;
let x2 = 2;
