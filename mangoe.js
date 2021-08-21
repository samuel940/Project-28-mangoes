class Mangoes {
    constructor(x, y,r) {

        var options ={
            restitution:0,
            isStatic: true,
            friction:1
        }
        this.r=r;
        this.image = loadImage("Images/mango.png");
        this.body = Bodies.circle(x, y, this.r,options);       
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        //this.body.scale = 0.75;
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        imageMode(CENTER);
        image(this.image, 0, 0,this.r*2,this.r*2);
        
        //fill(this.color)
        ellipseMode(RADIUS);
        //ellipse(0, 0, this.r,this.r);
        pop();
    }

};