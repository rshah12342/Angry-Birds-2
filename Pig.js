class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }
  display(){
    console.log(this.body.speed)
   
    if (this.body.speed<3){
      super.display();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5
      tint(255, this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }

  }
};

//one byte = 8 bits

//one unit of computer memory is 1 byte

//completely on byte or fully visible or white = 255
//255 = (11111111)

//completely off byte or fully invisible or black = 0
//0 = (00000000)