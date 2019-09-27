const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let f = new linearFunction(2,3);

console.log(f);

console.log(f.y(10));

for(let x = 0; x = < 100; x += 10)
{
  let point = new Point(new Vector2d(x, f.y(x)),10,"green");
  console.log(x, f.y(x));
}

let A = new Point(new Vector2d(200,200), 10,"blue");
let B = new Point(new Vector2d(500,300), 10,"red");
