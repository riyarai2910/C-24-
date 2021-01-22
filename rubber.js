class rubber {

    constructor(x,y,width,height,angle);
     var options  =  {
    'density':1,
    'friction':5,
    'restitution':0.3,
     }
     
     this.Body=Bodies.circle(x,y,radius,options);
     this.width=width;
     this.height=height
     //this.image=
     World.add(World,this.body);
}

display(){

var angle= this.body.angle
push();
translate(pos.x,pos,y);
rectMode(CENTER);
rotate(angle);
rect(0,0,this.width,this.height);
fill(255);
strokeWeight(3);
stroke('blue');
fill('red');
pop();

}