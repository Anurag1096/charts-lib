// Handles utility functions eg(Scaling, color conversions)
export const Utills = {
    scale(value,min,max,newMin,newMax){
        return ((value - min) / (max - min)) * (newMax - newMin ) + newMin;

    },

    getRandomColor(){
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
    dataToPixelY(value) {
        const { yMax, yMin } = Utills.scale();
        const canvasHeight = this.ctx.canvas.height;
        return canvasHeight - ((value - yMin) / (yMax - yMin)) * canvasHeight;
    },
    calculateXStep(numPoints) {
        const { xMax, xMin } = Utills.scale();
        return (xMax - xMin) / (numPoints - 1); // Divide by (n - 1) for points spacing
    }
}