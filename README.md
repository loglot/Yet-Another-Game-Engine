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
this.game.LIB.draw.DrawShape(Rect,"#ffa",5,ctx) // makes a yellow square at Rects position and size
```


