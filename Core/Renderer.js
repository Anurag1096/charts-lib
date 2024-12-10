/*
.Handles all drawing operations of specific chart
.Line chart needs drawLine low level api  method for drawing(The line chart class will handle logic for
 multiple lines in a lineChart.
.Barchart needs drawRect method.
 */
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
    drawRect(x, y, width, height, color = "black", fill = false) {
        this.ctx.beginPath();
        if (fill) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x, y, width, height);
        } else {
            this.ctx.strokeStyle = color;
            this.ctx.strokeRect(x, y, width, height);
        }
    }

    // Draw a circle
    drawCircle(x, y, radius, color = "black", fill = false) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        if (fill) {
            this.ctx.fillStyle = color;
            this.ctx.fill();
        } else {
            this.ctx.strokeStyle = color;
            this.ctx.stroke();
        }
    }
    drawText(text, x, y, font = "16px Arial", color = "black") {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }
    clearCanvas(width, height) {
        this.ctx.clearRect(0, 0, width, height);
    }
}
