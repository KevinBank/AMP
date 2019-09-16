const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];
let maxPoints = 10;

for (let i = 0; i < maxPoints; i++)
{
  let A = new Point(new Vector2d(getRandomNumber(width), getRandomNumber(height)), 100, "red");
  balls.push(A);
}

// let A = new Point(new Vector2d(200,200),100,"red");

function animate()
{
  requestAnimationFrame(animate);
  for(let i = 0; i < balls.length; i++)
  {
    balls[i].draw(context);
  }
}

window.addEventListener('click',(evt)=>
{
let mouseVector = new Vector2d(evt.clientX, evt.clientY);
for(let i = 0; i < balls.length; i++)
{
  let distanceMouseBall = new Vector2d(0,0);
  distanceMouseBall.differenceVector(mouseVector, balls[i].position);
  if(distanceMouseBall.magnitude < 20)
  {
    balls[i].color = "blue";
  }
}
});

animate();

// window.addEventListener('click',(evt)=>
// {
//   let mouseVector = new Vector2d(evt.clientX,evt.clientY);
//   let differenceMousePoint = new Vector2d(0,0);
//
//   differenceMousePoint.differenceVector(A.position, mouseVector);
//
//   if(differenceMousePoint.magnitude < 100)
//   {
//     A.color = "blue";
//     A.draw(context);
//   }
//
//   console.log(mouseVector);
//   console.log(differenceMousePoint);
//   console.log(differenceMousePoint.magnitude);
// }
// );

function getRandomNumber(max)
{
  return Math.floor(Math.random()* max);
}

// function mouseListener()
// {
//   console.log("Click");
// }
