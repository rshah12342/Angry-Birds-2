class SlingShot{
    constructor(bodyA, pointB){
        //creates options
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //how stiff or flimsy the bond is
            stiffness: 0.04,
            //the distance when the points are at rest
            length: 10
        }
        //creates a property for pointB
        this.pointB = pointB;
        //loads images
        this.image1 = loadImage ("sprites/sling1.png");
        this.image2 = loadImage ("sprites/sling2.png");
        this.image3 = loadImage ("sprites/sling3.png");
        //it creates a general object (this.sling) with options provided
        this.sling = Constraint.create(options);
        //adds this.sling and its world to the main matter.world
        World.add(world, this.sling);
    }
    //to remove the bird from the constraint so it can fly
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }
    //display function
    display(){
       //if the bird is in bodyA, then carry out the function.
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //makes the color the brown in the image
            stroke (48, 22, 8)
            //makes the line thinner if it is dragged to the left
            if (pointA.x < 200){
                image(this.image3, pointA.x - 30, pointA.y - 10, 10, 30)
               //changes the thickness of the line
                strokeWeight(3);
                line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);    
            }
            //makes the line thicker if dragged to the right
            else{
                strokeWeight(7);
                image(this.image3, pointA.x - 30, pointA.y - 10, 10, 30)
                line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
            }
           
        }
        //puts the image on the screen
        image(this.image1, 210, 20);
        image(this.image2, 180, 20)
    }
}