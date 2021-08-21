class Stone {
    constructor(x,y,r) {
        var options = {
            'isStatic': false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.r=r;
        
        this.body = Bodies.circle(x, y, this.r,options);       
        this.visibility = 0;
        this.image = loadImage("Images/stone.png");
        //this.color=color(0,0,0);
        World.add(world, this.body)
        //image(this.image, 0, 0, this.width, this.height);
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            //imageMode(CENTER);
            noStroke();
            imageMode(CENTER);
            image(this.image, 0, 0, this.r*2,this.r*2);
        
            //fill(this.color)
            ellipseMode(RADIUS);
            //ellipse(0, 0, this.r,this.r);
            pop();
          }
        
    
}