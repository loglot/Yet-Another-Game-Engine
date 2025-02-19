import { Main } from "./main.js";
import { library } from "../lib/import.js";
export class game{
    main = new Main(this)
    LIB = new library()
    
    
    tick(){
        this.main.tick()    
    }
    load(){
        this.main.load()
    }
}