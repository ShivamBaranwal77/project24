class Circle{
    constructor(x, y,radius) {
      var options = {
          restitution:0.4,
          friction:0.3,
          density:0.1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(pos.x, pos.y,this.radius);
    }
  };