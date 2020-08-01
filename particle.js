class particle{
    constructor(x,y,r,colour){
        var options={
        'restitution' :0.8,
        'friction': 1.0,
        'density': 1.0
        }
        this.Body = Bodies.circle(x,y,this.r,options);
        this.r=radius;
        this.colour=colour(random(0,255), random(0,255), random(0,255)),
        World.add(world,this.body);
    }
    diplay(){
        push();
        var pos=this.body.position;
        translate(this.body.position.x, this.body.position.y);
        ellipsMode(RADIUS);
        ellipse(pos.x,pos.y,r);
        pop();
    }
}