/**
 * 
 * @param {*} num1 integer numerical variable 1
 * @param {*} num2 integer numerical variable 2
 * @returns spiral matrix
 */

function spiralLeftRight(num1, num2) {
    var matrix = new Array(num1)
    let n = num1
    let x = 0
    let y = 0
    let valor = num1 * num2
    let position = n - 1

    //create array 2d
    for (let i = 0; i < num1; i++) {
        matrix[i] = new Array(num2);
    }
    //fill numbers in spiral
    while (valor > 0) {
        for (x = y; x <= position; x++) {
            matrix[y][x] = valor--;
        }
        for (x = y + 1; x <= position; x++) {
            matrix[x][position] = valor--;
        }
        for (x = position - 1; x >= y; x--) {
            matrix[position][x] = valor--;
        }
        for (x = position - 1; x >= y + 1; x--) {
            matrix[x][y] = valor--;
        }
        y++
        position--
    }

    return matrix
}

function spiralRightLeft(num1, num2) {
    var matrix = new Array(num1)
    let n = num1
    let x = 0
    let y = 0
    let valor = num1 * num2
    let position = n - 1

    //create array 2d
    for (let i = 0; i < num1; i++) {
        matrix[i] = new Array(num2);
    }
    //fill numbers in spiral
    while (valor > 0) {
        for (x = position; x >= y; x--) {
            matrix[y][x] = valor--;
        }
  
        for (x = y + 1; x <= position; x++) {
            matrix[x][y] = valor--;
        }

        for (x = y + 1; x <= position; x++) {
            matrix[position][x] = valor--;
        }

        for (x = position - 1; x >= y + 1; x--) {
            matrix[x][position] = valor--;
        }
        y++
        position--
    }

    return matrix
}
/**
 * 
 * @param {*} matrix matrix to sum
 * @returns sum of diagonals integers
 */
function diagonalSummation(matrix = []) {
    let x = 0
    let y = 0
    let total = 0
    let length = matrix.length
    if (length%2 != 0){
        total = -1
    }
    //Sum first diagonal from left to right
    for (x = 0; x <= length - 1; x++) {
        for (y = 0; y <= length - 1; y++) {
            if (matrix[x] === matrix[y]) {
                total += matrix[x][y]
                console.log(total, "izquierda derecha")
            }
        }
    }

    x = 0
    y = length - 1

    //Sum first diagonal from right to left
    while (x <= length - 1 && y > -1) {

        // 4 * 4 
        // 32 + 24
        total += matrix[x][y]
        console.log(total, "derecha izquierda")
        x++
        y--


    }
    return "the sum of their main diagonals is ".concat(total)
}

module.exports = { spiralLeftRight, diagonalSummation, spiralRightLeft}
