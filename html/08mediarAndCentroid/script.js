const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,300),25,"pink","A",true);
let B = new Point(new Vector2d(300,200),25,"pink","A",true);
let C = new Point(new Vector2d(300,300),25,"pink","A",true);


function animate()
{
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);

  A.draw(context);
  B.draw(context);
  C.draw(context);
}

animate()

// function getRandom(max)
// {
//   let ans = Math.floor(Math.random()*max);
//   return ans;
// }
