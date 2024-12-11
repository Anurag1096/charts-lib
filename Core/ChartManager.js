//Base class for manging charts
import {defaultOptions} from "./defaultSettings"
import {GridLines} from "../Components/GridLines";
import {Axis} from "../Components/Axis";
import {Title} from "../Components/Title";
import {Legend} from "../Components/Legend";

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
     this.drawComponents()
     this.render()
    }

    drawComponents(){
        // Now first we start by clearing the canvas
        // This will handle just initial draw of the components like Gridlines,axis and title
        // Other components will be handled by base class as required
        // The renderer class in init by a context in base class
        this.renderer.clearCanvas(this.canvas.width, this.canvas.height);
        // With this we pass the necessary data to the gridlines to draw
        GridLines.draw(this.renderer,this.canvas,this.options);
        // Creating Axis lines in the given context
        Axis.draw(this.renderer,this.canvas,this.options);
        Title.render(this.ctx,this.options.title,this.options);
        // 4. Render Legends (optional)
        if(this.options.legends){
            Legend.render(this.renderer,this.canvas,this.options);
        }
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