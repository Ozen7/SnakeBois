//customization
var ROWS = 10;
var COLS = 5;
var SIZE = 100;
var offsetX = window.innerWidth/2-ROWS*SIZE/2;
var offsetY = window.innerHeight/2-COLS*SIZE/2;


function setup() {

  createCanvas(window.innerWidth,window.innerHeight);

  //creating cells
  for(var i = 0; i < ROWS; i++) {
    for(var j = 0; j < COLS; j++) {
      cellArray.push(new Cell(i*SIZE+offsetX,j*SIZE+offsetY,SIZE,SIZE));
    }
  }
  //creating test snake
  snakeArray.push(new Snake());
}


function draw() {

  background(100);

  //actions for classes
  for(var i = 0; i < cellArray.length; i++) {
    cellArray[i].update();
    cellArray[i].sketch();
  }

  for(var i = 0; i < snakeArray.length; i++) {
    snakeArray[i].update();
    snakeArray[i].sketch();
  }
}
//classes
var cellArray = [];
class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.update = function () {
    };
    this.sketch = function () {
      fill("white");
      strokeweight(1);
      stroke(0);
      rect(this.x, this.y, this.w, this.h);
    };
  }
}

var snakeArray = [];
class Snake {
  constructor() {
    this.x = SIZE + offsetX;
    this.y = SIZE + offsetY;
    this.w = SIZE;
    this.h = SIZE;
    this.update = function () {
    };
    this.sketch = function () {
      fill("yellow");
      rect(this.x, this.y, this.w, this.h);
    };
  }
}

