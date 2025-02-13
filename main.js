const canvas = document.getElementById("screen")
const ctx = canvas.getContext("2d")

function tick(){
    requestAnimationFrame(tick)
    resize()
}

function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = display.aspectRatio[1] * window.innerWidth / display.aspectRatio[0];
    if(ctx.canvas.height>window.innerHeight){
        ctx.canvas.height=window.innerHeight
        ctx.canvas.width = display.aspectRatio[0] * window.innerHeight / display.aspectRatio[1]
    }
    ctx.scale(ctx.canvas.width/display.startWidth,ctx.canvas.width/display.startWidth)
    display.scale=ctx.canvas.width/display.startWidth
}
requestAnimationFrame(tick)