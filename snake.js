//customization
var ROWS = 30;
var COLS = 30;
var SIZE = 25;
var offsetX = window.innerWidth/2-ROWS*SIZE/2;
var offsetY = window.innerHeight/2-COLS*SIZE/2;


function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  frameRate(1)
  //creating cells

  for(var i = 0; i < ROWS; i++) {
    //creating new rows in the 2d cell array
    cellArray.push([]);
    for(var j = 0; j < COLS; j++) {
      cellArray[i].push(new Cell(i,j,SIZE,SIZE));
    }
  }
  cellArray[1][3].type = 1;
}


function draw() {

  background(100);

  //actions for classes
  for(var i = 0; i < cellArray.length; i++) {
    for(var j = 0; j < cellArray.length; j++) {
      cellArray[i][j].update();
      cellArray[i][j].sketch();
    }

  }

  // for(var i = 0; i < snakeArray.length; i++) {
  //   snakeArray[i].update();
  //   snakeArray[i].sketch();
  // }
}
//classes
var cellArray = [];
class Cell {
  constructor(i, j, w, h) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.h = h;
    this.type = 0;
    this.update = function () {

      switch(this.type) {
        case 0:

          break;
        case 1:
        //test to move snake head. does not work
            cellArray[i][j].type = 0;
            if(cellArray[i+1] != undefined) {
              cellArray[i+1][j].type = 1;
            }

          break;
        case 2:

          break;
      }

    };
    this.sketch = function () {
      switch(this.type) {
        case 0:
          fill("white");
          break;
        case 1:
          fill("yellow");
          break;
        case 2:
          fill("red");
          break;
      }
      stroke(0);
      rect(this.i*SIZE+offsetX, this.j*SIZE+offsetY, this.w, this.h);


    };
  }
}

var snakeArray = [];
// class Snake {
//   constructor() {
//     this.x = SIZE + offsetX;
//     this.y = SIZE + offsetY;
//     this.w = SIZE;
//     this.h = SIZE;
//     this.update = function () {
//     };
//     this.sketch = function () {
//       fill("yellow");
//       rect(this.x, this.y, this.w, this.h);
//     };
//   }
// }
