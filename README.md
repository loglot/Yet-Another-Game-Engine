# Yet Another Game Engine
"making a reusable engine because why not?"

all code shown will be based on the tick function in /game/main.js

[how to use](https://github.com/loglot/Yet-Another-Game-Engine?tab=readme-ov-file#how-to-use)

# Shapes
this engine makes great use of shapes, here are example shapes and how they can be used!
```javascript
{TYPE:"Point",X:0,Y:0} // a single point in space, 0PX across
{TYPE:"Circ",X:0,Y:0,R:50} // a basic circle, 100PX across
{TYPE:"Rect",X:0,Y:0,W:50,H:50} // a basic rectangle, 50PX across


var Rect = {TYPE:"Rect",X:0,Y:0,W:50,H:50}
var Circ = {TYPE:"Circ",X:80,Y:0,R:50}
this.game.LIB.test.colide(Rect,Circ) // returns: true

//DrawShape(Shape, (Color : optional, defaults to white), (Padding : optional, defaults to 0), (Context : optional, defaults to basic screen))
this.game.LIB.draw.DrawShape(Rect,"#ffa",5,ctx) // makes a yellow square at Rects position and size with a padding of 5
this.game.LIB.draw.DrawShape(Circ,"#aff",0) // makes a cyan Circle at Circs position and size with a padding of 0, this circle overlaps the rectangle
```

# Entities
This engine has its own entity system for storing basic positions
```javascript   
var position= new this.game.LIB.entity()
this.position.velX = 1
this.position.xFriction = .95

this.position.move() // moves to the right 1 and multiplies velX by friction

this.position.changeVel(10,0,"=") // sets right velocity to 10
this.position.changeVel(10,10,"+") // adds 10 horizontal and vertical velocity
this.position.changeVel(0,10,"/") // devides vertical velocity by 10

this.position.changeFriction(0,.5,"=") // sets vertical friction to .5
```

# Keyboard Input
this uses the keydrown key state handler, full info on that [here](https://jeremyckahn.github.io/keydrown/)
### Basics of Keydrown
```javascript
if(kd.W.isDown()) // executes if W is down
if(kd.W.justPressed()) // executes if W was just pressed
```

# Controller Input
TBD

there is support, but i need to relearn my controller manager, this will be updated soon ish

# How To Use
Download the contents of this repo or use the "use this template" button on the top right
to run projects, you can use nodeJS (don't ask me how to use it, i have no clue) or you could do what i do and download the liveserver extention in vscode
