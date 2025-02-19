import { entity as Entitu } from "./entity.js";
import { DrawUtils } from "./drawUtils.js";
import { Controller } from "./controller.js";
import { Timer } from "./timer.js";
import { tests } from "./coliders.js";
export class library{
    entity = Entitu
    draw = new DrawUtils()
    Gamepad = new Controller()
    timer = new Timer()
    test = new tests()
}