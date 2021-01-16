class Paper{
constructor(x,y,radius){

    var option ={
    isStatic: false,
    restitution: 0.8,
    friction: 10,
    density: 1.2
    }

    this.body = Bodies.circle(x,y,radius,option);
    this.body.radius = radius;

    World.add(world,this.body);
}

display(){

    var pos = this.body.position;

    push()
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("yellow");
    fill(3000);
    ellipse(pos.x,pos.y,this.body.radius);
    pop()
  
  }
 
}
