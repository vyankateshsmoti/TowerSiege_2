class CBlock2{
    constructor(x,y,width,height){
        var options={
            friction : 1.0 ,
            density : 1.0 ,
            restitution : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed <3){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("cyan");
            rect(0,0,this.width, this.height);
            pop();
          }else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -5;
            pop();
            
          }
        }
      }
   