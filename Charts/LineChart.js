import {ChartManager} from "../Core/ChartManager";
import {Utills} from "../Core/Utills";

export class LineChart extends ChartManager {


    render() {
        // Line Rendering process
        // Line rendering process
        const { dataSet, labels } = this.options.data;
        const xStart = Utills.scale(); // Start of the x-axis
        const xStep =Utills.calculateXStep(labels.length);

        // Loop through each series in the dataset
        dataSet.forEach((data, seriesIndex) => {
            for (let i = 0; i < data.length - 1; i++) {
                const x1 = xStart + i * xStep;
                const y1 = Utills.dataToPixelY(data[i]);
                const x2 = xStart + (i + 1) * xStep;
                const y2 = Utills.dataToPixelY(data[i + 1]);

                this.renderer.drawLine(x1, y1, x2, y2, 2, this.getSeriesColor(seriesIndex));
            }
        });
    }
}