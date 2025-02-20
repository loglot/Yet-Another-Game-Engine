# Yet Another Game Engine
"making a reusable engine because why not?"

all code shown will be based on the tick function in /game/main.js

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

# Keyboard Input
this uses the keydrown key state handler, slightly modified, full info on that [here](https://jeremyckahn.github.io/keydrown/)
## Basics of Keydrown
```javascript
if(kd.W.isDown()) // executes if W is down
```

