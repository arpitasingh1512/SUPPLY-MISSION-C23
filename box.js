class Box{
    constructor(x,y,width,height){
        //all the properties of the objects go here
        var  options={
            'restitution':0.8,//bounciness
            'friction': 1.5,
            'density': 1.5
          };

          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world,this.body);

          box1= (800,500,20,200);
          box2= (1000,490,100,20);
          box3= (1000,490,100,20);
    }

    //functions go here
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("red");
        rect(0,0,this.width,this.height);
        pop()
    }
}