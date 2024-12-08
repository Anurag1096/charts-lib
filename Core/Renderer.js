// Handles all drawing operations
export class Renderer {
    constructor(ctx){
        //this refers to instance
        this.ctx = ctx;
    }

    drawLine(x1, y1, x2, y2 ,width=1, color="black") {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2,y2);
        this.ctx.lineWidth = width;
        this.ctx.strokeStyle=color;
        this.ctx.stroke();
    }

    // method for rectangle
    drawRect(x1, y1, x2, y2, width=1, color="black") {}
    drawCircle(x1, y1, x2, y2, r) {}
}
