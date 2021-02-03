class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution:0.0,
          friction:0.01
        
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
       //console.log(this.body.speed);
 if(this.body.speed < 6){
  var pos =this.body.position;
  push()
  rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);
  pop()
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   pop();
 }
 }
}