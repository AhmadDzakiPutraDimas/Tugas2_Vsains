let zombies =[];

function setup() {
  createCanvas(1387, 692);

  for (let k = 0; k < 10; k++){
    zombies.push(new Mover());
  }
}

function draw() {
  background(0,100,130);
  for (let k = 0; k < zombies.length; k++){
    zombies[k].Objek();
    zombies[k].show_Objek();
    zombies[k].Batas();
 }
}

class Mover {
  constructor(x,y){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.05,-0.05);
  }
  
  show_Objek(){
    noStroke();
    fill('red');
    rect(this.location.x, 
             this.location.y, 
             20, 
             20);
  }
  
  Objek(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 15;
    
    arahMouse.normalize();
    arahMouse.mult(0.8); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  Batas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}