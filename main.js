const espiral = require('./espiral')

let result = espiral.espiral(4, 4)
let totalSum = espiral.diagonalSummation(result)
console.log(result)
console.log(totalSum)
