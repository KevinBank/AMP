class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    differenceVector(a,b){
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    sumVector(a,b){
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }

    add(vector){
      this.dx += vector.dx;
      this.dy += vector.dy;
    }

    draw(context, pos){

      let shaftHeight = this.dx * 5;
      let shaftWidth = 20;
      let arrowHeight = 100;
      let arrowWidth = 20;

      context.fillStyle = this.color;
      context.beginPath();
      context.save();
      context.translate(pos.dx,pos.dy);
      context.rotate(this.angle)

      context.moveTo(0,0);
      context.lineTo(0,shaftHeight/2);
      context.lineTo(shaftWidth,shaftHeight/2);
      context.lineTo(shaftWidth,arrowHeight/2);
      context.lineTo(shaftWidth + arrowWidth,0);
      context.lineTo(shaftWidth,-arrowHeight/2);
      context.lineTo(shaftWidth,-shaftHeight/2);
      context.lineTo(0,-shaftHeight/2);
      context.closePath();
      context.stroke();
      context.fill();

      context.restore();
    }

    get magnitude(){
      return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }
}
