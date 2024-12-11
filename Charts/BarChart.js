import {ChartManager} from '../Core/ChartManager';
import {GridLines} from "../Components/GridLines";
import {Axis} from "../Components/Axis";
import {Utills} from "../Core/Utills"
import {Title} from "../Components/Title";
import {Tooltip} from "../Components/Tooltip";
import {Legend} from "../Components/Legend";
export class BarChart extends ChartManager {
    render() {


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



    }

    calculateBarWidth(numBars) {
        //need to refactor this
        const { xMax, xMin } = Utills.scale();
        return (xMax - xMin) / numBars;
    }

}