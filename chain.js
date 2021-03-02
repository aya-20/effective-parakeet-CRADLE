class Rope{
    constructor(a, b, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: a,
            bodyB: b,
            pointB: {x: this.offsetX, y:this.offsetY}
            //length: 30,
            //stiffness: 0.3 

        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        var Taser1X = pointA.x;
        var Taser1Y = pointA.y;
        var Taser2X = pointB.x + this.offsetX;
        var Taser2Y = pointB.y + this.offsetY;
        line(Taser1X, Taser1Y, Taser2X, Taser2Y);
     
    }
}