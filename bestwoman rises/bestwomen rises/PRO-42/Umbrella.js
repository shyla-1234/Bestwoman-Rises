class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        
        this.radius = 50;
        this.cap=loadImage("Walking Frame/cap.png");
       

        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        
        image(this.image,pos.x,pos.y+70,300,300);
        if(frameCount>=200){
        image(this.cap,pos.x,pos.y+70,300,300);
       this.image.visibility=false;
       
        }
    }
}
