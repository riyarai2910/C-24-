class stone {

    constructor(x,y,width,height,angle);

     var options  =  {
    'density':3,
    'friction':1.0,
    'restitution':0.5,
     }
     
     this.body=Bodies.rectangle(x.y.width.height.options);
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
    stroke('black');
    fill('green');
    pop();
    

}