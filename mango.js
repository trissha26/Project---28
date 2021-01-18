class Mango{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1.0
            
        }
         this.body = Bodies.circle(x,y,r/3,options);
         this.image = loadImage('mango.png');
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