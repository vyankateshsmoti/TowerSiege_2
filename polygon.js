class polygon{
    constructor(x,y,width,height){
        var options = {
            friction : 1.0,
            density : 1.0,
            restitution : 1
           // isStatic : false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        this.Visibility = 255;
        World.add(world,this.body);
    }
    display(){
//this.body.position.x = mouseX;
//this.body.position.y = mouseY;
         

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
} 