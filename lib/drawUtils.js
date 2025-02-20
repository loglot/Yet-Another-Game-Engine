
const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

export class DrawUtils {
    
    Image(image,x,y,width,height,weDrawingNow=ctx){
        weDrawingNow.drawImage(image,x,y,width,height)
    }

    DrawShape(Shape={TYPE:"Point",X:0,Y:0},color="#fff",expand=0,drawingHathDonBeenethCalled=ctx){
        if(Shape.TYPE=="Point"){
            this.Circle(Shape.X,Shape.Y,expand,color,drawingHathDonBeenethCalled)
        }
        if(Shape.TYPE=="Circ"){
            this.Circle(Shape.X,Shape.Y,Shape.R+expand,color,drawingHathDonBeenethCalled)
        }
        if(Shape.TYPE=="Rect"){
            this.Rect(Shape.X-expand,Shape.Y-expand,Shape.W+(expand*2),Shape.H+(expand*2),color,drawingHathDonBeenethCalled)
        }
    }

    Bean(x, y, width, height, color, drawyboi = ctx) {

        drawyboi.beginPath();
        drawyboi.arc(x - 10, (y + 10) - (height / 2), width / 2 +5, 0, ( Math.PI/180 ) * 180, ( Math.PI/180 ) * 180,  false);
        drawyboi.fillStyle = "rgba(0, 0, 0, .2)";
        drawyboi.fill();
        drawyboi.closePath();

        drawyboi.beginPath();
        drawyboi.arc(x - 10, (y + (height - (width / 2)) + 10) - (height / 2), width / 2 +5, 0, Math.PI, false);
        drawyboi.fill();
        drawyboi.closePath();

        drawyboi.beginPath();
        drawyboi.rect((x - 15) - (width / 2), y - (height / 2) + 10, width + 10 , height - width / 2 );
        drawyboi.fill();
        drawyboi.closePath();    


        drawyboi.beginPath();
        drawyboi.rect((x - 5) - (width / 2) , (y - 5) - (height / 2), width + 10 , height - width / 2 + 10);
        drawyboi.fillStyle = "#33363f";
        drawyboi.fill();
        drawyboi.closePath();

        drawyboi.beginPath();
        drawyboi.arc(x, (y + (height - (width / 2))) - (height / 2) , width / 2 + 5, 0, Math.PI * 2, false);
        drawyboi.fill();
        drawyboi.closePath();

        drawyboi.beginPath();
        drawyboi.arc(x, y - (height / 2), width / 2 +5, 0, Math.PI * 2, false);
        drawyboi.fill();
        drawyboi.closePath();

        // Draw inside color of bean

        drawyboi.beginPath();
        drawyboi.rect(x - (width / 2), y - (height / 2), width, height - width / 2);
        drawyboi.fillStyle = color;
        drawyboi.fill();
        drawyboi.closePath();

        drawyboi.beginPath();
        drawyboi.arc(x, (y + (height - (width / 2))) - (height / 2), width / 2, 0, Math.PI * 2, false);
        drawyboi.fill();
        drawyboi.closePath();

        drawyboi.beginPath();
        drawyboi.arc(x, y - (height / 2), width / 2, 0, Math.PI * 2, false);
        drawyboi.fill();
        drawyboi.closePath();
        
    }

    
    Text(text, x, y, strokeColor = 'black', fillColor = 'white', Ctx = ctx, size = 80) {
        Ctx.font = `${size}px Sans-serif`;
        Ctx.strokeStyle = strokeColor;
        Ctx.lineWidth = 8;
        Ctx.lineJoin="miter";
        Ctx.miterLimit=2;
        Ctx.strokeText(text, x, y);
        Ctx.fillStyle = fillColor;
        Ctx.fillText(text, x, y);

    }

    Line(x1, y1, x2, y2, color, width = 20, outline = true, oColor = "black", weight = 5, drawTime = ctx, cap = "round") {
        if(outline) {
            drawTime.beginPath();
            drawTime.moveTo(x1, y1);
            drawTime.lineTo(x2, y2);
            drawTime.lineWidth = width + weight
            drawTime.strokeStyle = oColor;
            drawTime.lineCap = "round";
            drawTime.stroke();
        }
        drawTime.beginPath();
        drawTime.moveTo(x1, y1);
        drawTime.lineTo(x2, y2);
        drawTime.lineWidth = width
        drawTime.strokeStyle = color;
        drawTime.lineCap = "round";
        drawTime.stroke();

    }
 
    Circle(x, y, rad, color = "rgba(255, 0, 0, .5)", CTX = ctx) {
        CTX.beginPath();
        //ctx.arc()
        CTX.arc(x, y, rad, 0, 2 * Math.PI);
        CTX.fillStyle = color;
        CTX.fill();
        CTX.closePath();
        //this.Text("orb", 100, 100)
    }

    Rect(x = 0, y = 0, width = 0, height = 0, color = "#000000", drawingTool = ctx) {
        drawingTool.beginPath();
        drawingTool.rect(x, y, width, height) 
        drawingTool.fillStyle = color;
        drawingTool.fill()
        drawingTool.closePath();
    }

}