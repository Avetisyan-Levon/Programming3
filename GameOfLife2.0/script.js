function matrixGenerator(matrixSize, grass, grassEater, predator, amenaker, doctor, virus, builder) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        //GrassEater 2

        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 predator

        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        //4 amenaker
        for (let i = 0; i < amenaker; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }

        //7 zomby
        //8 wall bag fix
        for (let i = 0; i < matrixSize; i++) {
                let x = Math.ceil(matrixSize / 2)
                matrix[i][x] = 8
                matrix[x][i] = 8
        }
        //9 builder
        for (let i = 0; i < builder; i++) {
                let x = Math.ceil(matrixSize / 2)
                matrix[i][x] = 9
                matrix[x][i] = 9
        }

        //5 doctor
        for (let i = 0; i < doctor; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)

                if (matrix[y][x] == 0) {

                        matrix[y][x] = 5
                }
        }
        //6 virus
        for (let i = 0; i < virus; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                if (matrix[y][x] == 0) {

                        matrix[y][x] = 6
                }
        }
        return matrix
}

let matrix = matrixGenerator(30, 17, 10, 10, 5, 5, 5, 5)
let side = 20
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var amenakerArr = []
var doctorArr = []
var virusArr = []
var zombieArr = []
var wallArr = []
var builderArr = []
function setup() {
        frameRate(8)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)
                                grassArr.push(grass)
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pre = new Predator(x, y)
                                predatorArr.push(pre)
                        } else if (matrix[y][x] == 4) {
                                let amena = new Amenaker(x, y)
                                amenakerArr.push(amena)
                        } else if (matrix[y][x] == 5) {
                                let doct = new Doctor(x, y)
                                doctorArr.push(doct)
                        } else if (matrix[y][x] == 6) {
                                let vir = new Virus(x, y)
                                virusArr.push(vir)
                        } else if (matrix[y][x] == 7) {
                                let vr = new Zombie(x, y)
                                zombieArr.push(vr)
                        } else if (matrix[y][x] == 8) {
                                let wl = new Wall(x, y)
                                wallArr.push(wl)
                        } else if (matrix[y][x] == 9) {
                                let bl = new Builder(x, y)
                                builderArr.push(bl)
                        }
                }
        }
}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                        } else if (matrix[y][x] == 4) {
                                fill("black")
                        } else if (matrix[y][x] == 5) {
                                fill("#42f5e3")
                        } else if (matrix[y][x] == 6) {
                                fill("white")
                        } else if (matrix[y][x] == 7) {
                                fill("#00ff00")
                        } else if (matrix[y][x] == 8) {
                                fill("brown")
                        }
                        else if (matrix[y][x] == 9) {
                                fill("#f2e091")
                        }
                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)
                }
        }
        for (let i in grassArr) {
                grassArr[i].mul()
        }
        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat()
        }

        for (let i in amenakerArr) {
                amenakerArr[i].eat()
        }
        for (let i in doctorArr) {
                doctorArr[i].eat()
        }
        for (let i in virusArr) {
                virusArr[i].eat()
        }
        for (let i in zombieArr) {
                zombieArr[i].move()
        }

        for (let i in wallArr) {
                wallArr[i].eat()
        }
        for (let i in builderArr) {
                builderArr[i].move()
        }
}
