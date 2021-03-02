class Paper{
    constructor(x,y){
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: options= 0.5,
            denstity: 1.2
        }
        this.body = Bodies.rectangle(x,y,width, height,options);
        this.width = width;
        this.height = height;
        this.image  = loadImage("sprites/paper.png");
        World.add(world,this.body);
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
    
}