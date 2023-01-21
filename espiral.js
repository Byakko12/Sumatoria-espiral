function espiral(num1, num2) {
    var matrix = new Array(num1)
    let n = num1
    let x = 0
    let y = 0
    let valor = num1 * num2
    let position = n - 1
    for (let i = 0; i < num1; i++) {
        matrix[i] = new Array(num2);
    }
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


function diagonalSummation(matrix = []) {
    let x = 0
    let y = 0
    let total = 0
    let length = matrix.length

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
    while (x <= length - 1 && y > -1) {
        console.log("x =", x, "y =", y, "length =", length)
        // 4 * 4 
        // 32 + 24
        total += matrix[x][y]
        console.log(total, "derecha izquierda")
        x++
        y--


    }
    return total
}
module.exports = { espiral, diagonalSummation }