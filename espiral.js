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
console.log(espiral(5,5))

module.exports = { espiral }