class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokey = loadImage("sprites/smoke.png");
    this.positions = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    this.moves = [this.body.position.x,this.body.position.y];
    this.positions.push(this.moves);
    }
    super.display();

    for(var i = 0; i < this.positions.length; i++){
    image(this.smokey,this.positions[i][0],this.positions[i][1]);
    }
  }
}
