const { a, add } = require('./local-1');
const { a: a2, add: add2 } = require('./local-2')



let sum = add2(3, 4, 4);
console.log(a2, sum)

const path = require("path")

console.log(path.parse("/G:/Works/programming hero/lavel/rowNodejs/first/index.js"))