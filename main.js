const espiral = require('./espiral')

let resultleft = espiral.spiralLeftRight(1,1)
let totalSumLeft = espiral.diagonalSummation(resultleft)
let resultRight = espiral.spiralRightLeft(1003,1003)
let totalSumRight = espiral.diagonalSummation(resultRight)
console.log(resultleft)
console.log(totalSumLeft)
console.log(resultRight)
console.log(totalSumRight)
