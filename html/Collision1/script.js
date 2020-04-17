const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,"lime","lo3123l",true);
let B = new Point(new Vector2d(500,500),20,"gold", "lol", true)
let point = new DPoint(new Vector2d(0,0),new Vector2d(20,20),new Vector2d(0,0),20,"yellow","lol231")

let l = new LinearFunction(0,0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  A.draw(context);
  B.draw(context);
  point.update();
  point.draw(context);
  point.vel.draw(context, point.pos);
}

animate();
