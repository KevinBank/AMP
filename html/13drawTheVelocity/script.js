const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new DPoint(new Vector2d(200,200),new Vector2d(0,0),new Vector2d(1,2),20,"yellow","POINTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  point.update();
  point.draw(context);
  point.vel.draw(context, point.pos);
}

animate();
