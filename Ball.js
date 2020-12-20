class Ball {
    constructor(x, y, diameter) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        }
        
        this.diameter = diameter;
        this.body = Bodies.circle(x, y, this.diameter/2, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        translate(pos.x, pos.y);

        rotate(angle);
        rectMode(CENTER);

        fill("blue");

        ellipse(0, 0, this.diameter);
        pop();
    }
};