const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let background = new Image();
background.src = "hakureishrine.jpg";
background.pos = 0;

let background2 = new Image();
background2.src = "hakureishrine.jpg";

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.src = "wheel.png";
frontWheel.pos =0;
frontWheel.vel = 10;

let backWheel = new Image();
backWheel.rot = 0;
backWheel.src = "wheel.png";

let car = new Image();
car.src = "car.png";

background.addEventListener('load',()=>{
  animate();
});

addEventListener('keydown',(evt)=>{
  switch (evt.key) {
    case "ArrowRight":
      frontWheel.vel += 1;
      break;
      case "ArrowLeft":
      frontWheel.vel -= 1;
      break;
    default:

  }
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.drawImage(background,-frontWheel.pos,0,canvas.width,canvas.height);
  context.drawImage(background2,background.width-frontWheel.pos + 640,0,canvas.width,canvas.height);

  context.drawImage(car,frontWheel.pos-754,650);

  context.save();
  context.translate(frontWheel.pos - 460,940);
  context.rotate(frontWheel.rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  context.save();
  context.translate(frontWheel.pos-670,940);
  context.rotate(frontWheel.rot);
  context.drawImage(backWheel,-backWheel.width/2,-backWheel.height/2);
  context.restore();

  frontWheel.rot += frontWheel.vel/80;
  frontWheel.pos += frontWheel.vel;
  background.pos -= frontWheel.vel;
  console.log(background.pos);


  if(frontWheel.pos>canvas.width+car.width){
    frontWheel.pos = 0;
  }
  if(frontWheel.pos<0){
    frontWheel.pos = canvas.width;
  }}
