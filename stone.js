class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
            
        }
         this.body = Bodies.circle(x,y,r/3,options);
         this.image = loadImage('stone.png');
         this.x = x;
         this.y = y;
         this.r = r;
         World.add(world,this.body);
         

    }
    
    display(){
        var pos = this.body.position;
        fill("pink");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        
    }
}