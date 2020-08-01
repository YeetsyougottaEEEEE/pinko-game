class pinko{
    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,this.r,options);
        this.r=radius;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = tis.body.position
        translate(this.body.position.x, this.body.position.y);
        ellipsMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,r);
        pop();
    }
};