const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"green","A",true);
let B = new Point(new Vector2d(600,600),15,"blue","A",true);
let C = new Point(new Vector2d(200,600),15,"pink","A",true);
let D = new Point(new Vector2d(600,200),15,"purple","A",true);
let I = new Point(new Vector2d(400,450),10,"white","A",true);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0, width,height);
  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  I.position.dx = l.intersection(m).x;
  I.position.dy = l.intersection(m).y;

  m.defineLineWithTwoPoints(C,D);
  m.draw(context);


  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  I.draw(context);
}

animate();
