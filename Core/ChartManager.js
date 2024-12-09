//Base class for manging charts
import {defaultOptions} from "./defaultSettings"

export class ChartManager{
    //container is a Html element where the chart will be rendered
    constructor(container, options){
      this.container = container;
      this.options = {...defaultOptions,...options};
      this.init()
    }
    init(){
     this.canvas= this.createCanvas();
     this.renderer=new Renderer(this.ctx);
     this.render()
    }

    createCanvas(){
        const canvas=document.createElement("canvas");
        canvas.width=this.container.offsetWidth;
        canvas.height=this.container.offsetHeight;
        this.ctx=canvas.getContext("2d");
        this.container.appendChild(canvas);
        return canvas;
    }
    render(){
 throw new Error("render() must be implemented in subclass");

    }
}