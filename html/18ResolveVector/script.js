const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,"lime","lo3123l",true);
let B = new Point(new Vector2d(600,500),20,"gold", "lol", true);
let C = new Point(new Vector2d(400,500),20,"green", "lo321l", true);

let l = new LinearFunction(0,0);

let vector = new Vector2d(1,1);
let rad = new Vector2d(1,1);
let tan = new Vector2d(1,1);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  vector.dx = B.position.dx - A.position.dx;
  vector.dy = B.position.dy - A.position.dy;

  rad.dx = C.position.dx - A.position.dx;
  rad.dy = C.position.dy - A.position.dy;

  tan.dx = -rad.dy;
  tan.dy = rad.dx;

  rad.magnitude = 1;
  tan.magnitude = 1;

  rad.magnitude = rad.dot(vector);
  tan.magnitude = tan.dot(vector);

  vector.draw(context,A.position,1);
  rad.draw(context,A.position,1);
  tan.draw(context,A.position,1);

}

animate();
