/*class Bob{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution :0.3,
            friction :0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, 40, options);
        
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        /*if (keyDown("up")){
          //Bodies.setVelocity(5);
          //Bodies.setAngularVelocity(5);

          Body.setVelocity(this.body, {
            x: mouseX - pos.x,
            y: mouseY - pos.y
          }) 
      
        
      
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        circle(0, 0, this.width, this.height);
        pop();
      }
      
    } */

    class Bob{
      constructor(x, y){
          var options={
              restitution:0.3,
              density: 1,
              friction: 5 
          }
          this.body = Bodies.circle(x, y, 40, options);
          this.width = 50;
          this.height = 50;
          World.add(world, this.body);
      
      }
      
      display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          fill("pink");
          ellipseMode(RADIUS);
          circle(0, 0, this.width, this.height);
          pop();
      }
      
      
  }

  
