// const canvas1 = document.getElementById('canvas1');
// // could be 3d, if you want to make a video game
// const ctx1 = canvas1.getContext('2d');
// canvas1.width = screen.width;
// canvas1.height = screen.height;
//
// ctx1.lineJoin = 'round';
// ctx1.lineCap = 'round';
// ctx1.lineWidth = 20;
// ctx1.strokeStyle = '#ac0000';
//
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// const clearDrawing =() => {
//   ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
// }
//
// canvas2.addEventListener('mousedown', () => isDrawing = true);
// canvas2.addEventListener('mouseup', () => isDrawing = false);
//
// function drawPosenet(x,y) {
//   // stop the function if they if not mouse down
//   if(!isDrawing) return;
//   console.log(x,y);
//   ctx1.beginPath();
//   ctx1.moveTo(lastX, lastY);
//   ctx1.lineTo(x,y);
//   ctx1.stroke();
//   [lastX, lastY] = [x, y];
// }

//------------------------------------------------------------------------------------------------

const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

const width = screen.Width;
const height = screen.Height;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(400,300),20,"red","A",true);
let B = new Point(new Vector2d(500,400),20,"blue","B",true);

let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"purple","p")

let target = A;

function drawPosenet(){
  context.clearRect(0,0,width,height);

  drawLineAB();
  A.draw(context);
  B.draw(context);
  point.draw(context);
  B.position.draw(context,new Vector2d(0,0),1,"white");
  point.pos.draw(context,new Vector2d(0,0),1,"white");

  point.vel.differenceVector(target.position,point.pos);

  if (point.vel.magnitude <= target.radius) {
      if(target == A){
        target = B;
      }else{
        target = A;
      }
  }

  console.log(point.vel.magnitude);
  point.vel.scalMul(0.02);

  point.update();
  point.vel.draw(context,point.pos,20,"red");
}

function drawLineAB(){
  context.beginPath();
  context.strokeStyle = "black";
  context.setLineDash([5, 15]);
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.closePath();
  context.stroke();
  context.setLineDash([0]);
}
