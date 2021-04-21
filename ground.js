class Ground{
    constructor(x,y,w,h){
var options={
    isStatic:true, 
    
}
this.x=x
this.y=y
this.w=w
this.h=h
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
World.add(world,this.body)
    }
    display(){
    push()
    translate (this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill (255,255,0)
strokeWeight(4)
    stroke (255)
    rect (0,0,this.w,this.h)
    pop ()
}
}