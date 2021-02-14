class Slingshot {
    constructor(bodyA,bodyB){
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        length:200,
        stiffness:0.3
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
   
    display(){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
            this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    }
}