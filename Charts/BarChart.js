import {ChartManager} from '../Core/ChartManager';
import {GridLines} from "../Components/GridLines";
import {Axis} from "../Components/Axis";
import {Utills} from "../Core/Utills"
import {Title} from "../Components/Title";
import {Tooltip} from "../Components/Tooltip";
import {Legend} from "../Components/Legend";
export class BarChart extends ChartManager {
    render() {
        // Now first we start by clearing the canvas
        // The renderer class in init by a context in base class
        this.renderer.clearCanvas(this.canvas.width, this.canvas.height);
        // With this we pass the necessary data to the gridlines to draw
        GridLines.draw(this.renderer,this.canvas,this.options);
        // Creating Axis lines in the given context
        Axis.draw(this.renderer,this.canvas,this.options);
        Title.render(this.ctx,this.options.title,this.options);
        // Bar rendering process
        const {dataSet , labels } = this.options.data;
        const barWidth = this.calculateBarWidth(labels.length);
        const xStart = Utills.scale() // Start of the x-axis
        // Starting of looping for every data point in bar graph
        dataSet.forEach((data, seriesIndex) => {
            data.forEach((value, index) => {
                const xPosition = xStart + index * barWidth;
                const yPosition = this.dataToPixelY(value);

                this.renderer.drawRect({
                    x: xPosition,
                    y: yPosition,
                    width: barWidth * 0.8, // Add padding
                    height: this.ctx.canvas.height - yPosition,
                    // this in not coded
                    color: this.getSeriesColor(seriesIndex),
                });
            });
        });

        // 4. Render Legends (optional)
        Legend.render(this.renderer,this.canvas,this.options);

    }

    calculateBarWidth(numBars) {
        //need to refactor this
        const { xMax, xMin } = Utills.scale();
        return (xMax - xMin) / numBars;
    }

}