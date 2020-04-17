const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(400,300),20,"red","A",true);
let B = new Point(new Vector2d(500,400),20,"blue","B",true);

let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"purple","p")

let target = A;

function animate(){
  requestAnimationFrame(animate);
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

  //console.log(point.vel.magnitude);
  point.vel.scalMul(0.02);

  point.update();
  point.vel.draw(context,point.pos,20,"red");
}

animate();

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
