const canvas = document.getElementById("screen")
const ctx = canvas.getContext("2d")

//------ Progect Settings ------
var display = {startWidth:1280, aspectRatio:[4,3], scale:0}



import { game as gameI } from "./game/import.js"
var game = new gameI()
function load(){
    requestAnimationFrame(tick)
    game.load()
}

function tick(){
    requestAnimationFrame(tick)
    resize()
    game.tick()
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


load()