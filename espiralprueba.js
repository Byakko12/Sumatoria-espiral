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
            console.log("x=",x,"y=", y, "position=", position)
            matrix[x][position] = valor--;
        }
        y++
        position--
    }

    return matrix
}
console.log(spiralLeftRight(4,4))