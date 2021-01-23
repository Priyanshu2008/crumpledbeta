class Ball {
    constructor(x,y,radius) {
      var options={
       isStatic: false,
       restitution:0.3,
       density:1.2,
      friction:0.5

      }
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
     circle(pos.x, pos.y,this.radius);
    }
  };