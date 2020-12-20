class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display()
    {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;

        var anchor1X = posA.x;
        var anchor1Y = posA.y;

        var anchor2X = posB.x + this.offsetX;
        var anchor2Y = posB.y + this.offsetY;

        push();

        strokeWeight(5);

        line(anchor1X, anchor1Y, anchor2X, anchor2Y);

        pop();
    }
}