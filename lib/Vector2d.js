class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    scalMul(scal){
        this.dx *= scal;
        this.dy *= scal;
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

    draw(context, pos, scale){
      let arrowHeight = 50;
      let arrowWidth = 50;
      let shaftHeight = 20;
      let shaftWidth = 100;

      context.fillStyle = this.color || "white";
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

    get angle()
    {
      return Math.atan2(this.dy,this.dx);
    }
}
