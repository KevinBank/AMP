class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = getRandomNumber(screen.height);
    this.vx = getRandomNumber(randomVel) + 0;
    this.vy = getRandomNumber(randomVel) + 0;
    this.r = getRandomNumber(25) + 25;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "3";
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];
let randomVel = 0;

// for (let i = 0; i<50; i++){
// let myBall = new Ball(getRandomNumber(canvas.width),getRandomNumber(canvas.height),10,"white");
// balls.push(myBall);
// myBall.draw(context);
// }

// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

function animate(){
  for (i = 0; i < 15; i++){
    let myBall = new Ball(getRandomNumber(canvas.width),-10,10,"white");
    balls.push(myBall);
    myBall.draw(context);
    console.log("wollah");
    }
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<balls.length; i++){
    let myBall = balls[i];
    // myBall.x += myBall.vx;
    myBall.y += myBall.vy;
    // if(myBall.x <0 || myBall.x > canvas.width){
    //   myBall.vx = - myBall.vx;
    // }
    // if(myBall.y <0 || myBall.y > canvas.height){
    //   myBall.vy = - myBall.vy;
    // }
    myBall.draw(context);
    if (myBall.y > canvas.height){
      balls.splice(i,1);
    }
  }
}
animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

addEventListener('mousedown',mouseHandler);

function mouseHandler(evt){
  for(let i=0; i<balls.length; i++){
  console.log(evt.clientX,evt.clientY);
  let dx = evt.clientX - balls[i].x;
  let dy = evt.clientY - balls[i].y;
  let dis = Math.sqrt(dx*dx + dy*dy);
  console.log(dis);
  if(dis<balls[i].r){
    console.log("SUCC");
    balls[i].color = "red";
  }
}
}

//hier volgt het script
