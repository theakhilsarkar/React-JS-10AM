function sum() {
  let a = 10;
  let b = 20;
  console.log(a + b);
}

sum();

// memory allocation
// sum - ref

// global execution context
// sum-> another execution context create
//              -> memory - a=undefine,b=undefine,con.log() - ref
//              -> execution - a = 10, b = 20, a+b --> print = 20 bytes
//              -> temp destroy - variables

let a = 10;
let b = 20;
console.log(a + b);

// memory allocation
// a = undefine - 10 bytes
// b = undefine - 10 bytes
// console.log() - reff

// global execution context
// a = 10
// b = 20
// a+b --> print

// program -> 2 variable - 20 bytes

// 1. update,remove
// 2.
// explain memory allocation & execution of give program.
// wap find cube of a number by udf.
// wap to find sum of array by udf and precedural oriented programming.
