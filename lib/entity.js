export class entity{
    x = 0
    y = 0
    velX = 0
    velY = 0
    yFriction = 1
    xFriction = 1

    move(){
        this.x+=this.velX
        this.y+=this.velY
        // this.changeVel(this.xFriction,this.yFriction,"/")
        this.velX*=this.xFriction
        this.velY*=this.yFriction
    }
    teleport(x=0,y=0){
        this.x=x
        this.y=y
    }
    changeVel(x=0,y=0,type="="){
        if(type=="="){
            this.velX=x
            this.velY=y
        }
        if(type=="+"){
            this.velX+=x
            this.velY+=y
        }
        if(type=="*"){
            this.velX*=x
            this.velY*=y
        }
        if(type=="/"){
            this.velX/=x
            this.velY/=y
        }
    }
    changeFriction(x=0,y=0,type="="){
        if(type=="="){
            this.xFriction=x
            this.yFriction=y
        }
        if(type=="+"){
            this.xFriction+=x
            this.yFriction+=y
        }
        if(type=="*"){
            this.xFriction*=x
            this.yFriction*=y
        }
        if(type=="/"){
            this.xFriction/=x
            this.yFriction/=y
        }
    }

}