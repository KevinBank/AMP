const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];
let maxPoints = 10;

for(let i=0; i< maxPoints ; i++){
  let  ball = new Point(new Vector2d(getRandom(width),getRandom(height)),20,"red");
  balls.push(ball)
}

function animate(){
  	requestAnimationFrame(animate);
    for(let i =0; i<balls.length;i++){
      balls[i].draw(context);
    }
}

window.addEventListener('click',(evt)=>{
  let mouseVector = new Vector2d(evt.clientX,evt.clientY);
  for(let i =0; i < balls.length; i++){
    let distanceMouseBall = new Vector2d(0,0);
    distanceMouseBall.differenceVector(mouseVector,balls[i].position);
    if(distanceMouseBall.magnitude < 20){
      balls[i].color = "blue";
    }
  }
})

animate();

function getRandom(max){
  return Math.floor(Math.random()*max);
}
