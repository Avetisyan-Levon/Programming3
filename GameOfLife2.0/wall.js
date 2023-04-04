class Wall {
   constructor(x, y) {
      this.x = x
      this.y = y
      this.energy = 100
      this.directions = []
   }


   getNewCoordinates() {
      this.directions = [
         [this.x - 1, this.y - 1],
         [this.x, this.y - 1],
         [this.x + 1, this.y - 1],
         [this.x - 1, this.y],
         [this.x + 1, this.y],
         [this.x - 1, this.y + 1],
         [this.x, this.y + 1],
         [this.x + 1, this.y + 1]
      ];
   }

   chooseCell(char, char1,char2,char3,char4,char5,char6) {
      this.getNewCoordinates()
      let found = []


      for (let i in this.directions) {
         let x = this.directions[i][0]
         let y = this.directions[i][1]
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char2) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char1) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char3) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char4) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char5) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char6) {
               found.push(this.directions[i])
            }
         }
      }
      return found

   }


   

   eat() {
      let emptyCell = this.chooseCell(2, 3,4,5,6,7,9)
      let newCell = random(emptyCell)

      if (newCell) {
         let newX = newCell[0]
         let newY = newCell[1]

         for (let i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
               this.energy -= 20
            }
         }
         for (let i in predatorArr) {
            if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
               this.energy -= 20
            }
         }
         for (let i in amenakerArr) {
            if (newX == amenakerArr[i].x && newY == amenakerArr[i].y) {
               this.energy -= 20
            }
         }
         for (let i in doctorArr) {
            if (newX == doctorArr[i].x && newY == doctorArr[i].y) {
               this.energy -= 20
            }
         }
         for (let i in virusArr) {
            if (newX == virusArr[i].x && newY == virusArr[i].y) {
               this.energy -= 20
            }
         }
         for (let i in zombieArr) {
            if (newX == zombieArr[i].x && newY == zombieArr[i].y) {
               this.energy -= 20
            }       
         }
         for (let i in builderArr) {
            if (newX == builderArr[i].x && newY == builderArr[i].y) {
               this.energy -= 100
            }       
         }
      if(this.energy <= -1){
         this.die()
      }
   }



   


}
   die(){
      matrix[this.y][this.x] = 0

      for(let i in wallArr){
               if(this.x == wallArr[i].x && this.y == wallArr[i].y) {
                           wallArr.splice(i,1)
               }
      }
   }
}