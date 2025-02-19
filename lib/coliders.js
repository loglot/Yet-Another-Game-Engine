export class tests{
    //{TYPE:"Point",X:0,Y:0}
    //{TYPE:"Circ",X:0,Y:0,R:0}
    //{TYPE:"Rect",X:0,Y:0,W:0,H:0}
    //{TYPE:"Triangle",P1:0,P2:0,P3:0} // NOT IMPLEMENTED

    colide(Shape1={TYPE:"Point",X:0,Y:0},Shape2={TYPE:"Point",X:0,Y:0}){
        //Made with help from https://jeffreythompson.org/collision-detection/
        if(Shape1.TYPE=="Point"&&Shape2.TYPE=="Point"){
            if(Shape1.X==Shape2.X&&Shape1.Y==Shape2.Y){
                return(true)
            } else{
                return(false)
            }
        }
        if(Shape1.TYPE=="Point"&&Shape2.TYPE=="Circ"){
            var distX = Shape1.X-Shape2.X
            var distY = Shape1.Y-Shape2.Y
            var dist = Math.sqrt((distX*distX)+(distY*distY))
            if(dist<Shape2.R){
                return(true)

            }else{
                return(false)
            }
        }
        if(Shape1.TYPE=="Circ"&&Shape2.TYPE=="Circ"){
            var distX = Shape1.X-Shape2.X
            var distY = Shape1.Y-Shape2.Y
            var dist = Math.sqrt((distX*distX)+(distY*distY))
            if(dist<Shape2.R+Shape1.R){
                return(true)

            }else{
                return(false)
            }
        }
        if(Shape1.TYPE=="Point"&&Shape2.TYPE=="Rect"){
            
            if(
                Shape1.X>Shape2.X&&
                Shape1.X<Shape2.X+Shape2.W&&
                Shape1.Y>Shape2.Y&&
                Shape1.Y<Shape2.Y+Shape2.H
            ){
                return(true)

            }else{
                return(false)
            }
        }
        if(Shape1.TYPE=="Rect"&&Shape2.TYPE=="Rect"){
            
            if(
                Shape1.X+Shape1.W>Shape2.X&&
                Shape1.X<Shape2.X+Shape2.W&&
                Shape1.Y+Shape1.H>Shape2.Y&&
                Shape1.Y<Shape2.Y+Shape2.H
            ){
                return(true)

            }else{
                return(false)
            }
        }
        if(Shape1.TYPE=="Rect"&&Shape2.TYPE=="Circ"){

            var testX = Shape2.X
            var testY = Shape2.Y
            
            if(Shape2.X<Shape1.X) testX = Shape1.X
            if(Shape2.X>Shape1.X+Shape1.W) testX = Shape1.X+Shape1.W

            if(Shape2.Y<Shape1.Y) testY = Shape1.Y
            if(Shape2.Y>Shape1.Y+Shape1.H) testY = Shape1.Y+Shape1.H

            var distX = Shape2.X-testX
            var distY = Shape2.Y-testY
            var dist = Math.sqrt((distX*distX) + (distY*distY))


            if (dist <= Shape2.R) {
                return(true)
            }
            return(false)
        }

    }

}