const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(getRandom(canvas.width),getRandom(canvas.height)),25,"purple","A",true);
let B = new Point(new Vector2d(getRandom(canvas.width),getRandom(canvas.height)),25,"purple","A",true);
let C = new Point(new Vector2d(getRandom(canvas.width),getRandom(canvas.height)),25,"purple","A",true);

let ABm = new Point(new Vector2d(0,0),15,"white","A",false);
let BCm = new Point(new Vector2d(0,0),15,"white","A",false);
let CAm = new Point(new Vector2d(0,0),15,"white","A",false);

let Center = new Point(new Vector2d(0,0),15,"white","A",false);

let lab = new LinearFunction(1,1);
let lbc = new LinearFunction(1,1);
let lca = new LinearFunction(1,1);

let labmc = new LinearFunction(1,1);
let lbcma = new LinearFunction(1,1);
let lcamb = new LinearFunction(1,1);

function animate()
{
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);

  lab.defineLineWithTwoPoints(A,B);
  lab.draw(context);
  lbc.defineLineWithTwoPoints(B,C);
  lbc.draw(context);
  lca.defineLineWithTwoPoints(C,A);
  lca.draw(context);

  labmc.defineLineWithTwoPoints(ABm,C);
  labmc.draw(context);
  lbcma.defineLineWithTwoPoints(BCm,A);
  lbcma.draw(context);
  lcamb.defineLineWithTwoPoints(CAm,B);
  lcamb.draw(context);

  ABm.position.dx = (A.position.dx + B.position.dx)/2;
  ABm.position.dy = (A.position.dy + B.position.dy)/2;
  BCm.position.dx = (B.position.dx + C.position.dx)/2;
  BCm.position.dy = (B.position.dy + C.position.dy)/2;
  CAm.position.dx = (C.position.dx + A.position.dx)/2;
  CAm.position.dy = (C.position.dy + A.position.dy)/2;
  Center.position.dx = (A.position.dx + CAm.position.dx)/2;
  Center.position.dy = (A.position.dy + CAm.position.dy)/2;

  A.draw(context);
  B.draw(context);
  C.draw(context);

  ABm.draw(context);
  BCm.draw(context);
  CAm.draw(context);
}

animate()

function getRandom(max)
{
  let ans = Math.floor(Math.random()*max);
  return ans;
}
