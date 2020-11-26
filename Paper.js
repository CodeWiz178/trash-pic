class Paper{
    constructor(x,y,radius){
    var options ={
        'isStatic': false,
       'restitution': 1.2,
        'friction': 0.1,
        'density': 0.2
    }
    this.body = Bodies.circle(x,y, radius, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    this.image.scale = 0.1;
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    imageMode(CENTER)
    image(this.image, pos.x, pos.y, this.radius);
  }
}
        
